from flask import Flask, request
from flask_cors import CORS
from feel_it import SentimentClassifier
from polyglot.detect import Detector
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

it_analyzer = SentimentClassifier()
en_analyzer = SentimentIntensityAnalyzer()
app = Flask(__name__)
CORS(app)

@app.route('/sentiment', methods=['POST'])
def get_sentiment():
  content_type = request.headers.get('Content-Type')
  res_list = []
  if (content_type == 'application/json'):
    data = request.json
    for d in data:
      lang_code = Detector(d["text"], quiet=True).language.code
      if lang_code == "it":
        res = it_analyzer.predict([d["text"]])
        res_list.append(res[0])
      elif lang_code == "en":
        res = en_analyzer.polarity_scores([d["text"]])
        res = "positive" if res["compound"] > 0.5 else ("negative" if res["compound"] < -0.5 else "neutral")
        res_list.append(res)
      else:
        # print("error, lang not detected:", lang_code)
        res_list.append("")

    
    return {"sentiments":res_list}
  else:
    return 'Content-Type not supported!'

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5556)
