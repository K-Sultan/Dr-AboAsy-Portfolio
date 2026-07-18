const fs = require('fs');
const readline = require('readline');
const path = require('path');

const transcriptPath = 'C:\\Users\\sultan\\.gemini\\antigravity-ide\\brain\\05c6b18f-aad2-4440-b7a6-ef9b97869afd\\.system_generated\\logs\\transcript.jsonl';
const targetDir = 'D:\\FreeLance\\Aboasy portfolio';

const filesToRestore = [
    "src\\App.jsx",
    "src\\components\\About.css",
    "src\\components\\Contact.css",
    "src\\components\\Education.css",
    "src\\components\\Expertise.css",
    "src\\components\\Features.css",
    "src\\components\\Features.jsx",
    "src\\components\\Footer.css",
    "src\\components\\Navbar.css",
    "src\\components\\Reviews.css"
];

const fileContents = {};

async function processLineByLine() {
  const fileStream = fs.createReadStream(transcriptPath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    try {
      const entry = JSON.parse(line);
      if (entry.tool_calls) {
        for (const call of entry.tool_calls) {
          const args = call.function?.arguments;
          if (!args || !args.TargetFile) continue;
          
          for (const file of filesToRestore) {
            if (args.TargetFile.endsWith(file)) {
              if (call.function.name === 'write_to_file' && args.CodeContent) {
                fileContents[file] = args.CodeContent;
              } else if (call.function.name === 'replace_file_content' && fileContents[file]) {
                // Apply the replacement if we have it
                let current = fileContents[file];
                let searchStr = args.TargetContent;
                let replaceStr = args.ReplacementContent;
                if (current.includes(searchStr)) {
                  fileContents[file] = current.replace(searchStr, replaceStr);
                }
              }
            }
          }
        }
      }
    } catch (e) {
      // ignore JSON parse errors for truncated lines
    }
  }

  // Write them out
  for (const file of filesToRestore) {
    if (fileContents[file]) {
      const fullPath = path.join(targetDir, file);
      fs.writeFileSync(fullPath, fileContents[file]);
      console.log(`Restored ${file}`);
    } else {
      console.log(`Could not find content for ${file}`);
    }
  }
}

processLineByLine();
