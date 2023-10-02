from bs4 import BeautifulSoup
import psycopg2
import urllib, csv, os, datetime, urllib.request, re, sys

d = dict()

theurl = "https://www.timeanddate.com/weather/croatia/zagreb/historic"
thepage = urllib.request.urlopen(theurl)
soup = BeautifulSoup(thepage, features="html.parser")


try:
    connection = psycopg2.connect(user="postgres",
                                  password="Leonjukic12",
                                  host="localhost",
                                  port="5433",
                                  database="HomeRoamDatabase")

    cursor = connection.cursor()

    #Deleting data from table
    sql_delete_query = """DELETE FROM pressure"""
    cursor.execute(sql_delete_query)
    connection.commit()
    count = cursor.rowcount
    print(count, "records deleted successfully")

except (Exception, psycopg2.Error) as error:
    print("Error in Delete operation", error)

finally:
    # closing database connection.
    if (connection):
        cursor.close()
        connection.close()
        print("PostgreSQL connection is closed")

cnt=0
for i in range (7, 46):
    text = soup.find_all('tr')[i].find_all('td')[6].text
    value = text.split(' ')
    time = soup.find_all('tr')[i].find_all('th')[0].text
    value = int(value[0])
    time = time[:5]
    if (time[3] != '0'):
        continue

    #Inserting scraped data into the HomeRoamDatabase
    try:
        connection = psycopg2.connect(user="postgres",
                                      password="Leonjukic12",
                                      host="localhost",
                                      port="5433",
                                      database="HomeRoamDatabase")
        cursor = connection.cursor()

        postgres_insert_query = """ INSERT INTO pressure (ind, hr, val) VALUES (%s,%s,%s)"""
        record_to_insert = (cnt, time, value)
        cursor.execute(postgres_insert_query, record_to_insert)

        connection.commit()
        count = cursor.rowcount
        cnt-=1
        print (count, "Record inserted successfully into pressure table")

    except (Exception, psycopg2.Error) as error :
        if(connection):
            print("Failed to insert record into pressure table", error)

    finally:
        #closing database connection.
        if(connection):
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")

    print(value, time, end=' ')
    print()
