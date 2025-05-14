function startTone() {
  Tone.start().then(() => {
    console.log("audio is ready");
    PlayRiff();
  });
}

function PlayRiff() {
  // monophonic
  const synth = new Tone.Synth().toDestination();
  const now = Tone.now();

  // exact time of press

  // Chorus
  synth.triggerAttackRelease("A4", "16n", now);
  synth.triggerAttackRelease("G4", "1n", now + 0.5);
  synth.triggerAttackRelease("E4", "16n", now + 2);
  synth.triggerAttackRelease("C4", "1n", now + 2.5);

  synth.triggerAttackRelease("E4", "16n", now + 4);
  synth.triggerAttackRelease("D4", "16n", now + 4.5);
  synth.triggerAttackRelease("C4", "16n", now + 5);

  // Chorus repeat
  synth.triggerAttackRelease("A4", "16n", now + 8);
  synth.triggerAttackRelease("G4", "1n", now + 8.5);
  synth.triggerAttackRelease("E4", "16n", now + 10);
  synth.triggerAttackRelease("C4", "1n", now + 10.5);

  synth.triggerAttackRelease("E4", "16n", now + 12);
  synth.triggerAttackRelease("D4", "16n", now + 12.5);
  synth.triggerAttackRelease("C4", "16n", now + 13);

  // Bridge
  synth.triggerAttackRelease("C5", "16n", now + 16);
  synth.triggerAttackRelease("C5", "16n", now + 16.5);

  synth.triggerAttackRelease("C4", "16n", now + 17.5);
  synth.triggerAttackRelease("C4", "16n", now + 18);
  synth.triggerAttackRelease("A3", "16n", now + 19);
  synth.triggerAttackRelease("C4", "16n", now + 19.5);

  // Bridge repeat
  synth.triggerAttackRelease("C5", "16n", now + 21);
  synth.triggerAttackRelease("C5", "16n", now + 22.5);

  synth.triggerAttackRelease("C4", "16n", now + 23);
  synth.triggerAttackRelease("C4", "16n", now + 23.5);
  synth.triggerAttackRelease("A3", "16n", now + 24);
  synth.triggerAttackRelease("C4", "16n", now + 24.5);

  // Chorus reprise
  synth.triggerAttackRelease("A4", "16n", now + 27.5);
  synth.triggerAttackRelease("G4", "1n", now + 28);
  synth.triggerAttackRelease("E4", "16n", now + 30);
  synth.triggerAttackRelease("C4", "1n", now + 30.5);

  synth.triggerAttackRelease("E4", "16n", now + 31);
  synth.triggerAttackRelease("D4", "16n", now + 31.5);
  synth.triggerAttackRelease("C4", "16n", now + 32);

  // monophonic
  const synthBass = new Tone.Synth().toDestination();
  // sample accurate time
  const loopA = new Tone.Loop((time) => {
    synthBass.triggerAttackRelease("C2", "16n", time);
  }, "4n").start(0);

  Tone.getTransport().start();
}
