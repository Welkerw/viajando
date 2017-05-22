import pymongo
import nltk
import re
import time
import json
from pymongo import MongoClient
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords


client = MongoClient()
client = MongoClient('mongodb://localhost:27017/')
db = client.viajando
termos = db.tweets
print("Recuperando Tweets")
print (time.strftime("%d/%m/%Y %H:%M:%S"))
result = termos.find()
textos = []
filtrado = []
emoji_pattern = re.compile("["
        u"\U0001F600-\U0001F64F"  # emoticons
        u"\U0001F300-\U0001F5FF"  # symbols & pictographs
        u"\U0001F680-\U0001F6FF"  # transport & map symbols
        u"\U0001F1E0-\U0001F1FF"  # flags (iOS)
                           "]+", flags=re.UNICODE)
print("removendo emojis, mentions, urls")
print (time.strftime("%d/%m/%Y %H:%M:%S"))
for doc in result:
	try:
		textos.append(emoji_pattern.sub(r'', re.sub(r"(?:\@|https?\://)\S+", '', doc['text'], flags=re.MULTILINE)))
	except:
		print("fim do cursor")
		break

print("Removendo stopwords")
print (time.strftime("%d/%m/%Y %H:%M:%S"))
#print("Stemming - removendo plural, gênero, etc")
stemmer = nltk.stem.RSLPStemmer()
for texto in textos:
	frase = ""
	for w in word_tokenize(texto) :
		if not w in stopwords.words('portuguese') and w != "RT":
			frase += w + " "
	filtrado += [ frase ]
print("Fim")
print (time.strftime("%d/%m/%Y %H:%M:%S"))

print("Calculando frequência")
fdist = nltk.FreqDist(filtrado)


for i in fdist:
	if i != "" and i != " ":
		tweet = {"texto": i, "freq": fdist[i]}
		print (tweet)
		db.carnaval_tratado.insert_one(tweet);
	





