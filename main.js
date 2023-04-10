'use strict';

{

const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
  const results = ['「DEAR LOSER」', '「VANISHING LOVE」', '「PHANTOM OF GUILT」', '「PHANTOM OF GUILT」', '「GIVE ME THE PLEASURE」', '「I`LL KILL YOU」', '「ALIVE」', '「KURENAI」', '	「UN-FINISHED...」', '「PROLOGUE (〜WORLD ANTHEM)」', '「BLUE BLOOD」', 'WEEK END', 'EASY FIGHT RAMBLING', 'X', 'ENDLESS RAIN', '紅', 'XCLAMATION', 'オルガスム', 'CELEBRATION', 'ROSE OF PAIN', 'UNFINISHED', 'Es Durのピアノ線', 'Silent Jealousy', 'Miscast', 'Desperate Angel', 'White Wind From Mr.Martin ～Pata`s Nap～', 'Voiceless Screaming', 'Stab Me In The Back', 'Love Replica', 'Joker', 'Say Anything', 'ART OF LIFE', 'DAHLIA', 'SCARS', 'Longing 〜跡切れたmelody〜', 'Rusty Nail', 'White Poem I', 'CRUCIFY MY LOVE', 'Tears', 'WRIGGLE', 'DRAIN', 'Forever Love (Acoustic Version)', 'Standing Sex', 'THE LAST SONG', 'I.V.', 'Scarlet Love Song -BUDDHA MIX-', 'JADE', 'BORN TO BE FREE' ];

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
