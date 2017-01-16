import {expect} from 'chai';

import {transformSVGAtt, camelCase} from '../utils';

describe('transformSVGAtt', () => {
  it('transforms style attribute', () => {
    expect(transformSVGAtt('style', 'fill:rgb(0,0,255);stroke:rgb(0,0,0)')).to.deep.equal({
      fill: 'rgb(0,0,255)',
      stroke: 'rgb(0,0,0)',
    });
  });

  it('transforms style attribute with dash-case attribute', () => {
    expect(transformSVGAtt('style', 'stop-color:#ffffff')).to.deep.equal({
      stopColor: '#ffffff',
    });
  });

  it('removes pixels from x, y, height and width attributes', () => {
    expect(transformSVGAtt('x', '2px')).to.deep.equal({x: '2'});
    expect(transformSVGAtt('y', '4px')).to.deep.equal({y: '4'});
    expect(transformSVGAtt('height', '65px')).to.deep.equal({height: '65'});
    expect(transformSVGAtt('width', '999px')).to.deep.equal({width: '999'});
  });
});

describe('camelCase', () => {
  it('transforms two word attribute with dash', () => {
    expect(camelCase('stop-color')).to.deep.equal('stopColor');
  });

  it('does not do anything to string that is already camel cased', () => {
    expect(camelCase('stopColor')).to.deep.equal('stopColor');
  });
});