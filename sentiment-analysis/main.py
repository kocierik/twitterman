# import main Flask class and request object
from flask import Flask, request
from feel_it import EmotionClassifier

# create the Flask app
emotion_classifier = EmotionClassifier()
app = Flask(__name__)

@app.route('/sentiment', methods=['GET'])
def get_sentiment():
  content_type = request.headers.get('Content-Type')
  if (content_type == 'application/json'):
    data = request.get_json()
    text = []
    for d in data:
      text.append(d["text"])
    result = emotion_classifier.predict(text)
    return result
  else:
    return 'Content-Type not supported!'

if __name__ == '__main__':
    # run app in debug mode on port 5000
    app.run(debug=True, port=5000)
