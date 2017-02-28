import pymongo
from pymongo import MongoClient
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

client = MongoClient()
client = MongoClient('mongodb://localhost:27017/')
db = client.viajando
termos = db.tweets
result = termos.find().sort("value", -1).limit(15)
textos = []
for doc in result:
	textos.append(doc['text'])

for texto in textos:
	print word_tokenize(texto)
	filtrado = [w for w in word_tokenize(texto) if not w in stopwords.words('portuguese')]
	print filtrado

	stemmer = nltk.stem.RSLPStemmer()
	filt_stem = []

	for i in filtrado:
	 filt_stem.append(stemmer.stem(i))

	print filt_stem

	fdist = nltk.FreqDist(filt_stem)

	for i in fdist:
	 print i + ': ' + str(fdist[i])