from flask import Flask, request, jsonify, render_template
import firebase_admin
from firebase_admin import credentials, firestore

app = Flask(__name__)

cred = credentials.Certificate("C:/Users/tudor/Downloads/codpl-36ee8-firebase-adminsdk-4m5mw-5fb500cc61.json")
firebase_admin.initialize_app(cred)

@app.route('/')
def home():
    return render_template('index.html')  

@app.route('/send-doc-id', methods=['POST'])
def receive_doc_id():
    try:
        data = request.get_json()
        doc_id = data.get('docId')

        def functie(doc_id):
            import firebase_admin
            from firebase_admin import credentials, firestore

        def algoritm (doc_Id):
            db = firestore.client()
            people_ref = db.collection("people")
            docs = people_ref.stream()  
            data = doc.to_dict()
            # Example: store each field into variables
            name = data.get('name', 'N/A')
            surname = data.get('surname', 'N/A')
            location1 = data.get('location1', 'N/A')
            location2 = data.get('location2', 'N/A')
            location3 = data.get('location3', 'N/A')
            freq1 = data.get('freq1', 'N/A')
            freq2 = data.get('freq2', 'N/A')
            freq3 = data.get('freq3', 'N/A')
            phone_number = data.get('pnumber', 'N/A')
            email = data.get('email', 'N/A')
            min_area = data.get('minarea', 'N/A')
            max_area = data.get('maxarea', 'N/A')
            rent = data.get('rent', False)
            buy = data.get('buy', False)
            min_price_rent = data.get('minpricerent', 'N/A')
            max_price_rent = data.get('maxpricerent', 'N/A')
            min_price_buy = data.get('minpricebuy', 'N/A')
            max_price_buy = data.get('maxpricebuy', 'N/A')
    
            import math
            def extract_lat_long_simple(location_string):
                parts = location_string.split(',')
                latitude = float(parts[0].split(':')[1].strip())
                longitude = float(parts[1].split(':')[1].strip())
                return latitude, longitude
        
            lat1, long1 = extract_lat_long_simple(location1)
            lat2, long2 = extract_lat_long_simple(location2)
            lat3, long3 = extract_lat_long_simple(location3)

            import math

            def calculate_distance(lat1, lon1, lat2, lon2):

                lat1_rad = math.radians(lat1)
                lon1_rad = math.radians(lon1)
                lat2_rad = math.radians(lat2)
                lon2_rad = math.radians(lon2)
                
                distance = math.acos(math.sin(lat1_rad) * math.sin(lat2_rad) +
                                    math.cos(lat1_rad) * math.cos(lat2_rad) * math.cos(lon2_rad - lon1_rad)) * 6371                
                return distance


            listanume=list()
            listasume=list()
            

            locations = db.collection("locatie")
            for doc in docs:
                 data = doc.to_dict()
                 nume = data.get('nume')
                 latapp = data.get('lat', None)
                 longapp = data.get('long', None)
                 x = calculate_distance(latapp, longapp, lat1, long1)
                 y = calculate_distance(latapp, longapp, lat2, long2)
                 z = calculate_distance(latapp, longapp, lat3, long3)
                 rentapp = data.get('rent', False)
                 sizeapp = data.get('area', 0)
                 priceapp = data.get('buyprice',0)
                 if (rentapp == True):
                     if (priceapp > min_price_rent):
                         if (priceapp < max_price_rent):
                             s= (freq1*x +freq2*y +freq3*z)
                             listanume.append(nume)
                             listasume.append(s)
            print(listasume)
            def sort_with_linked_list(int_list, char_list):
                combined = list(zip(int_list, char_list))
                combined.sort()  
                sorted_int_list, sorted_char_list = zip(*combined)
                return render_template('result.html', my_list=list(sorted_char_list))
            return render_template('result.html', my_list=list())
        
        algoritm(doc_id)

        
        print(f'Received Document ID: {doc_id}')

        return jsonify({"message": "Document ID received successfully!", "docId": doc_id}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)



'''
import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("C:/Users/tudor/Downloads/codpl-36ee8-firebase-adminsdk-4m5mw-5fb500cc61.json")
firebase_admin.initialize_app(cred)

db = firestore.client()


people_ref = db.collection("people")
docs = people_ref.stream()

for doc in docs:
    data = doc.to_dict()
    # Example: store each field into variables
    name = data.get('name', 'N/A')
    surname = data.get('surname', 'N/A')
    location1 = data.get('location1', 'N/A')
    location2 = data.get('location2', 'N/A')
    location3 = data.get('location3', 'N/A')
    freq1 = data.get('freq1', 'N/A')
    freq2 = data.get('freq2', 'N/A')
    freq3 = data.get('freq3', 'N/A')
    phone_number = data.get('pnumber', 'N/A')
    email = data.get('email', 'N/A')
    min_area = data.get('minarea', 'N/A')
    max_area = data.get('maxarea', 'N/A')
    rent = data.get('rent', False)
    buy = data.get('buy', False)
    min_price_rent = data.get('minpricerent', 'N/A')
    max_price_rent = data.get('maxpricerent', 'N/A')
    min_price_buy = data.get('minpricebuy', 'N/A')
    max_price_buy = data.get('maxpricebuy', 'N/A')

import math

def extract_lat_long_simple(location_string):
    parts = location_string.split(',')
    latitude = float(parts[0].split(':')[1].strip())
    longitude = float(parts[1].split(':')[1].strip())
    return latitude, longitude
    

lat1, long1 = extract_lat_long_simple(location1)
lat2, long2 = extract_lat_long_simple(location2)
lat3, long3 = extract_lat_long_simple(location3)

print (lat1)
print (lat2)
print (long1)
print (long2)

import math

def calculate_distance(lat1, lon1, lat2, lon2):

    lat1_rad = math.radians(lat1)
    lon1_rad = math.radians(lon1)
    lat2_rad = math.radians(lat2)
    lon2_rad = math.radians(lon2)
    
    distance = math.acos(math.sin(lat1_rad) * math.sin(lat2_rad) +
                         math.cos(lat1_rad) * math.cos(lat2_rad) * math.cos(lon2_rad - lon1_rad)) * 6371
    
    return distance

dist = calculate_distance(lat1, long1, lat2, long2)
print(dist)


locations = db.collection("locatie")
for doc in docs:
    data = doc.to_dict()
    lat = data.get('lat', None)
    long = data.get('long', None)





'''

