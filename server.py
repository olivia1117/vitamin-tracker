from flask import Flask, request, render_template
import csv

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/page2')
def page2():
    return render_template('page2.html')

@app.route('/page3')
def page3():
    return render_template('page3.html')

@app.route('/submit', methods=['POST'])
def submit():
    
    data = request.form.to_dict()
    
   
    formatted_data = ", ".join([f"{key}: {value}" for key, value in data.items()])
    
    
    with open('data.csv', mode='a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        if file.tell() == 0:  
            writer.writerow(['Supplements'])  
        writer.writerow([formatted_data])  
    
    return "Data saved successfully!"

if __name__ == '__main__':
    app.run(debug=True)