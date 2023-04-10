'use strict';

{

const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
  const results = ['「DEAR LOSER」', '「VANISHING LOVE」', '「PHANTOM OF GUILT」', '「PHANTOM OF GUILT」', '「GIVE ME THE PLEASURE」', '「ILL KILL YOU」', '「ALIVE」', '「KURENAI」', '	「UN-FINISHED...」', '「PROLOGUE (〜WORLD ANTHEM)」', '「BLUE BLOOD」', 'WEEK END', 'EASY FIGHT RAMBLING', 'X', 'ENDLESS RAIN', '紅', 'XCLAMATION', 'オルガスム', 'CELEBRATION', 'ROSE OF PAIN', 'UNFINISHED'];

  const n = Math.floor(Math.random() * results.length);

  result.textContent = results[n];

  // switch(n) {
  //   case 0:
  //     result.textContent = '大吉';
  //     break;
  //   case 1:
  //     result.textContent = '中吉';
  //     break;
  //   case 2:
  //     result.textContent = '凶';
  //     break;
  // }

});

}
