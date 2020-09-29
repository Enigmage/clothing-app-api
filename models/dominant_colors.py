import cv2, sys
import numpy as np
from sklearn.cluster import KMeans
import json 

class DominantColors : 

    CLUSTERS = None
    IMAGE = None
    COLORS = None
    LABELS = None
    PERCENTAGES = None

    def __init__(self,image,clusters=3) : 
        self.CLUSTERS = clusters
        self.IMAGE = image
    
    def dominantColors(self) :

        #read image
        img = cv2.imread(self.IMAGE)

        img = cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
        img = img.reshape((img.shape[0] * img.shape[1] , 3))
        self.IMAGE = img

        #using k-means to cluster pixels
        kmeans = KMeans(n_clusters= self.CLUSTERS)
        kmeans.fit(img)

        #cluster centers are the dominant colors
        self.COLORS = kmeans.cluster_centers_
        self.LABELS = kmeans.labels_
        return self.COLORS

    def rgb2hex(self, rgb) : 
        return '#%02x%02x%02x' % (int(rgb[0]), int(rgb[1]), int(rgb[2]))

    def calcPercentage(self) : 
        colors = self.dominantColors()
        colors = [ self.rgb2hex(color) for color in colors ]
        counts = np.bincount(self.LABELS)

        counts = counts / sum(counts)
        self.PERCENTAGES = dict(zip(colors , counts))
        return self.PERCENTAGES

if __name__ == "__main__":
    img = sys.argv[1] + '/' + sys.argv[2]
    clusters = 3
    dc = DominantColors(img,clusters)

    percentages = dc.calcPercentage()
    result = json.dumps(percentages, indent= 4)
    
    resFile = sys.argv[1] + '/' + sys.argv[2] + '.json'
    print(json.dumps(percentages,ensure_ascii=False, indent= 4))
    
    sys.exit()        