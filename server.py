from flask import Flask, request, render_template, send_file
import csv
import firebase_admin
from firebase_admin import credentials

app = Flask(__name__)

cred = credentials.Certificate("C:/Users/oadam/vitamin-tracker-secret/vitamin-tracker-6ab1b-firebase-adminsdk-dvnj1-e3561f47e1.json")

firebase_admin.initialize_app(cred)

#render the templates for each page
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/page2')
def page2():
    return render_template('page2.html')

@app.route('/page3')
def page3():
    return render_template('page3.html')

# this reads back in the csv data for the checked supplements to make a list
@app.route('/showlist')
def showlist():
    checked_supplements = []
    with open('data.csv', 'r') as file:
        reader = csv.reader(file)
        next(reader)  # Skip header row
        for row in reader:
            if row[2] == "Yes":  # if checked column is yes
                checked_supplements.append(row[0])  # then add supplement name and display it

    return render_template('showlist.html', supplements=checked_supplements)


@app.route('/submit', methods=['POST'])
def submit():
    # Get the JSON data from the request
    # data = request.get_json()
    data = request.form

    # header for the csv columns
    header = ['Supplement', 'User Input', 'Checked']

    # open the CSV file amd append the data
    with open('data.csv', mode='a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)

        # write the header row only if the file is empty
        if file.tell() == 0:
            writer.writerow(header)

        for key, value in data.items():
            if not key.endswith("_checked"): 
                checked = data.get(key + "_checked", False)
                if checked:  #if user checks the supplement, then it'll write yes
                    writer.writerow([key, value, "Yes"]) 
                else: #if not, then no
                    writer.writerow([key, value, "No"])
        
    return render_template('success.html')  # redirect to success page 

@app.route('/download')
def download():
    return send_file('data.csv', as_attachment=True, download_name='supplements_data.csv')


if __name__ == '__main__':
    app.run(debug=True)
