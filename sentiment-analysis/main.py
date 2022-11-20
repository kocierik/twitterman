from flask import Flask, request
from flask_cors import CORS
from feel_it import EmotionClassifier

emotion_classifier = EmotionClassifier()
app = Flask(__name__)
CORS(app)

@app.route('/sentiment', methods=['POST'])
def get_sentiment():
  content_type = request.headers.get('Content-Type')
  if (content_type == 'application/json'):
    data = request.json
    text = []
    for d in data:
      text.append(d["text"])
    result = emotion_classifier.predict(text)
    return result
  else:
    return 'Content-Type not supported!'

if __name__ == '__main__':
    # run app in debug mode on port 6000
    app.run(debug=True, port=55555)
