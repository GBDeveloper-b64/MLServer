from sklearn.linear_model import LinearRegression

X = [
	(1, 1, 1),
	(0, 0, 0),
	(0, 0, 1),
	(1, 0, 0),
	(0, 1, 0)
];
y = [
	(0, 0, 0),
	(1, 1, 1),
	(1, 1, 1),
	(1, 1, 1),
	(0, 0, 0)
];

model = LinearRegression()
model.fit(X, y)

def predict(r, g, b):
  return model.predict([(r, g, b)])[0];

if __name__ == "__main__": 
	print(predict(1, 1, 1))
