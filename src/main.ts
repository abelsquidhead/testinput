import * as core from '@actions/core';

async function run() {
  try {
    const myInput = core.getInput('myInput');

    console.log("my input: " + myInput);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
