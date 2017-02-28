import pymongo
import nltk
from pymongo import MongoClient
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

client = MongoClient()
client = MongoClient('mongodb://localhost:27017/')
db = client.viajando
termos = db.tweets
result = termos.find()
textos = []
filtrado = []
for doc in result:
	try:
		textos.append(doc['text'])
	except:
		print("fim do cursor")
		break

print("Removendo stopwords")
for texto in textos:
	filtrado += [w for w in word_tokenize(texto) if not w in stopwords.words('portuguese')]

stemmer = nltk.stem.RSLPStemmer()
filt_stem = []

print("Stemming - removendo plural, gênero, etc")
for i in filtrado:
	filt_stem.append(stemmer.stem(i))

print (filt_stem)
print("Calculando frequência")
fdist = nltk.FreqDist(filt_stem)

for i in fdist:
	print (i + ': ' + str(fdist[i]))