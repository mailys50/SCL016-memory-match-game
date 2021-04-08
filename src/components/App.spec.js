import {App,shuffle,match} from './App.js';


describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
  
  it('prueba shuffle', () => {
    const num=[1,2,3,4,5];
    let board =shuffle(num);
    expect(board).not.toEqual(num);
  });

  it('prueba match', () => {
    let comparet =match();
    expect(comparet).tobe(true);
  });
  

});


