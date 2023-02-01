import pandas as pd
from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
# import datetime as dt

op = webdriver.ChromeOptions()
# comment the below line out if you want to see the web browser
#op.add_argument('headless')
driver = webdriver.Chrome(ChromeDriverManager().install(), options = op)

dnpcardsUrl = "https://dandpsportscards.com/products/2020-topps-update-series-baseball-jumbo-box-presale"
blowoutUrl = "https://www.blowoutcards.com/2020-topps-update-series-baseball-jumbo-box.html"
steelcityUrl = "https://www.steelcitycollectibles.com/i/2020-topps-update-series-baseball-hta-hobby-jumbo-box"
daveadamsUrl = "https://www.dacardworld.com/sports-cards/2020-topps-update-series-baseball-hobby-jumbo-box"
ribcru7Url = "https://rbicru7.com/products/2020-topps-series-2-jumbo-baseball-box?_pos=1&_sid=4e981342d&_ss=r"
urls = [
    dnpcardsUrl,
    blowoutUrl,
    steelcityUrl,
    daveadamsUrl,
    ribcru7Url
]

def getProductPage(url, driver = driver):
    try:
        driver.get(url)
    except:
        print('URL not found')
        return 'N/A'

def getBlowoutPrice(url):
    getProductPage(url)
    try:
        price = float(driver.find_element(By.CLASS_NAME, "price-box").text.strip("$"))
        print(price)
    except:
        print("some trash shit")

getBlowoutPrice(blowoutUrl)

def getSteelCityUrl(url):
    getProductPage(url)
    try:
        price_box = driver.find_element(By.CLASS_NAME, "p-price").text
        #print(price_box)
        prices = price_box.split(" ")
        price = prices[0].strip("$")
        print(price)
    except:
        print('sdflk')
getSteelCityUrl(steelcityUrl)

def getDaveAdamsPrice(url):
    getProductPage(url)
    try:
        prices = driver.find_element(By.CLASS_NAME, "pricing").text.split("$")
        if len(prices) > 1:
            return float(prices[1])
        else:
            return float(prices[0])
    except:
        print('price box dne')
        return 'N/A'
getDaveAdamsPrice(daveadamsUrl)

def getRibcru7Price(url):
    getProductPage(url)
    try:
        price = float(driver.find_element(By.CLASS_NAME, "product-single__price").text.strip("$"))
        print(price)
    except:
        print("price box dne")
        return '/404/'
getRibcru7Price(ribcru7Url)

def getdnpcardsPrice(url):
    getProductPage(url)
    try:
        price = float(driver.find_element(By.CLASS_NAME, "product-single__price").text.strip("$"))
        return price
    except:
        print("price box dne")
        return '/404/' 
getdnpcardsPrice(dnpcardsUrl)