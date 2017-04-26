var watson = require('watson-developer-cloud');
require('dotenv').config();

var tone_analyzer = new watson.ToneAnalyzerV3({
  username: process.env.TONE_ANALYZER_USERNAME,
  password: process.env.TONE_ANALYZER_PASSWORD,
  version: 'v3',
  version_date: '2016-05-19 '
});

var params = { utterances: [
	{"text": "Hello, can you help me", "user": "customer"},
	{"text": "How are you ?", "user": "agent"},
	{"text": "Nothing is working", "user": "customer"},
	{"text": "Sorry to hear this", "user": "agent"}
]};

console.log("Testing Tone Analyzer...");
tone_analyzer.tone_chat(params, function(err, tone) {
	console.log("\nInput:");
	console.log(JSON.stringify(params, null, 2));
    if (err)
      console.log(err);
    else {
    	console.log("\nOutput:");
		console.log(JSON.stringify(tone, null, 2));
    }
});
