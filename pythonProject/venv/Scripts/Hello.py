from flask import Flask
import openai

openai.api_key = "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"

completion = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[{"role": "user", "content": "how do i know if im getting scammed? in under 30 words"}]
)

slay = completion['choices'][0]['message']['content']

app = Flask(__name__)

@app.route("/")
def helloe_world():
    return slay


if __name__ == '__main__':
    app.run('127.0.0.1', 5000, debug=True, threaded=False)