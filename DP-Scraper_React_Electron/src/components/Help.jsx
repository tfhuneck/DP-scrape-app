import Card from './Component';
import React, { useState } from "react";
import home from '../images/home.png';
import product from '../images/product.png';
import category from '../images/category.png';
import entry from '../images/entry.png';
import name from '../images/name.png';
import entername from '../images/entername.png';
import url from '../images/url.png';
import dpurl from '../images/dpurl.png';
import blowout from '../images/blowout.png';
import dave from '../images/dave.png';
import steel from '../images/steel.png';
import rbi from '../images/rbi.png';
import urlcomplete from '../images/urlcomplete.png';
import submit from '../images/submit.png';
import submitted from '../images/submitted.png';
import editor from '../images/editor.png';
import fulleditor from '../images/fulleditor.png';
import edit from '../images/edit.png';
import deleteitem from '../images/delete.png';
import deletecomplete from '../images/deletecomplete.png';
import choosescrape from '../images/choosescrape.png';
import loading from '../images/loading.png';
import warning from '../images/warning.png';
import complete from '../images/complete.png';
import prices from '../images/prices.png';
import exportprice from '../images/export.png';
import pricelist from '../images/pricelist.png';
import pdfsaved from '../images/pdfsaved.png';
import selected from '../images/selected.png';
import selectedprices from '../images/selectedprices.png';
import backup from '../images/backup.png';
import backupalert from '../images/backupalert.png';
import folder from '../images/folder.png';
import recover from '../images/recover.png';
import upload from '../images/upload.png'

function Help() {
    return (
        <>
        <Card 
            header="NAVIGATING THE APP"
            title="Navigate through the Application"
            body={(
                <>
                <p>
                    Use the Navigation Bar on the left to navigate to the different features of the Application. 
                </p>
                <p>
                    <h5>Dashboard</h5>
                    The Dashboard is your main page of the Application. Here you can run the main scraping functions and browse through the prices of the products. 
                </p>
                <p>
                    <h5>Data Editor</h5>
                    In the Data Editor you can enter the products' url data, as well as edit and delete existing data. 
                </p>
                <p>
                    <h5>Print Prices</h5>
                    In the Print Prices Section you can export and print the entire price data of each product list. You also have the option to select and print specific prices only. The selected prices will be printed in a displayable price list. 
                </p>
                <p>
                    <h5>Data Backup</h5>
                    Under Data Backup, you can backup your entered data to a local folder on your desktop. You can also upload and recover backed-up data. This also allows to keep multiple applications on multiple devices synchronized. 
                </p>
                    <img src={home} className='img-fluid'/>
                </>
            )}
        />
        <br />
        <Card 
            header="ENTER DATA"
            title='Data Entry'
            body={(
                <>
                    <p>
                        Data Entry is the fist step in the price scraping process and requires a lot of attention to detail. 
                        Since there are a lot of products with very similar names, the data entry process is the only step that is not automated. 
                        It is important to enter the urls of the correct products, inorder to scrape accurate prices. The data is entered in the data Entry field found under the Data Editor tab. 
                    </p>
                    <img src={entry}  className='img-fluid'/>
                    <br />
                    <br />
                    <p>
                        <h5>Step 1 Select Product</h5>
                        Browse the D&P Sports Cards website (preferably) or other four websites, and select the product you want to enter.
                    </p>
                    <img src={product}  className='img-fluid'/>
                    <br />
                    <br />
                    <p>
                        <h5>Step 2 Select Sport</h5>
                        When entering the data the first step is to select the sports Category of the product. All data is seperated and handeled in the following 4 categories: Basketball, Baseball, Football, and Other.
                        You have to select one of these Categories to save the data in the correct list. 
                    </p>
                    <img src={category}  className='img-fluid'/>
                    <br />
                    <br />
                    <p>
                        <h5>Step 3 Copy & Paste Product Name</h5>
                        Next you want to copy the FULL name of the product you want to enter, and paste it into the first Entry Field, called Enter Prdouct Name. 
                    </p>
                    <img src={name}  className='img-fluid'/>
                    <img src={entername}  className='img-fluid'/>
                    <br />
                    <br />
                    <p>
                        <h5>Step 4 Copy & Paste Url </h5>
                        Now it is time to copy the url for the product and paste it into the entry field. Copy the entire url from the browser, and paste it into the D&P Cards url field.
                    </p>
                    <img src={url}  className='img-fluid'/>
                    <img src={dpurl}  className='img-fluid'/>
                    <br />
                    <br />
                    <p>
                        <h5>Step 5 Repeat the process with the remaining websites</h5>
                        Next you want to search the same product on the following websites: <br/> www.blowoutcards.com ; <br/> www.dacardworld.com ;<br/> www.steelcitycollectibles.com ; <br/> www.rbicru7.com ; <br/>
                        Make sure to select the exact same product, as many products come in different iterations and are often also sold in a case or as single packs. If you are entering a hobby box product for example, make sure that every 
                        product you enter from each site is the exact same hobby box product. The price of the product being similar to the other sites, is also a good indicator of selecting the right product.
                    </p>
                    <img src={blowout}  className='img-fluid'/> <br /> <br />
                    <img src={dave}  className='img-fluid'/> <br /> <br />
                    <img src={steel}  className='img-fluid'/> <br /> <br />
                    <img src={rbi}  className='img-fluid'/> <br /><br />
                    <p>
                    Once all the data is entered correctly the Data Entry should look similar to the image below.
                    </p>
                    <img src={urlcomplete}  className='img-fluid'/> 
                    <p>
                        <h5>Step 5 Submit the entry</h5>
                        Now you are ready to submit the entry you have made. Once you have made sure that all the data you have entered is correct, simply press the submit button and wait for the confirmation.
                    </p>
                    <img src={submit}  className='img-fluid'/> 
                    <img src={submitted}  className='img-fluid'/> 
                    <p>
                        Now you can see the data you just entered in the Data Editor
                    </p>
                    <img src={editor}  className='img-fluid'/> 
                    <p>
                        <h5>Important Notes</h5>
                        <h6>BE ADVISED!</h6>
                        If the product is not available on one or multiple of the sites, enter a place holder symbol in the url filed instead of the url! <br />
                        This could include: 'N/A' or '/' or '-' or '#'. This way the scrape will return a blank value for this product and the price data will be displayed correctly.
                    </p>
                </> 
            )}
        />
        <br />
        <Card 
            header="DATA EDITOR"
            title="Edit and Delete Data "
            body={(
                <>
                <p>
                    The Data Editor has four tables with the four different categories. The different tables can be viewed by selecting the desired table with the buttons on top. 
                    These tables display all the data that has been entered. You can edit or delete each entry.
                    If you are looking for a specific product you can search for it, in the search bar on the top right. 
                </p>
                <img src={fulleditor}  className='img-fluid'/> 
                <p>
                    <h5>Deleting Entries</h5>
                    In order to delete an entry click on the edit button of the row you want to delete. A field will show up where you can select edit and delete. Select Delete.
                    The item will automatically be deleted from the database. You will see a confirmation that the item was deleted. 
                </p>
                <img src={deleteitem}  className='img-fluid'/>
                <img src={deletecomplete}  className='img-fluid'/>
                <p>
                    <h5>Editing Entries</h5>
                    In order to edit an entry click on the edit button of the row you want to edit. A field will show up where you can select edit and delete. Select Edit.
                    Once edit has been clicked, the Data will show up in the Data Entry above. You can now make the edits in the entry fields. MAKE SURE TO SELECT THE RIGHT CATEGORY AGAIN. Once you have finished your edits, press submit, to enter the edited Data back into the database. <br /> <br />
                    <h6>BE ADVISED! If you clicked edit but do not make any changes, make sure to still SELECT THE RIGHT CATEGORY AND CLICK SUBMIT, since the original data entry has been deleted from the database.</h6>
                </p>
                <img src={edit}  className='img-fluid'/>
                <img src={submit}  className='img-fluid'/> 
                <p>
                <h5>Eliminating Dublicates</h5>
                    If you find that you have duplicate entries in your database, you can eliminate the duplicates as follows.  
                    You click on edit on the item that has duplicate entries, go to the Data Entry and submit it again. (Don't forgot to reselect the right sports category).
                    This process will automatically delete all entries with the same name and submit the entry again. If you simply delete the duplicate item, it will delete all entries, because the delete process automatically will delete all entries with the same name. 
                </p>
                </>
            )}
        />
        <br />
        <Card 
            header="RUN SCRAPES"
            title='Scraping Price Data'
            body={(
                <>
                <p>
                    On the Dashboard you will find the scrape functionality. You have 5 buttons that will trigger either the price price-scraping of a specific sport category, or scrape all price data at once. 
                    To scrape just click select one of the buttons and the scrape proccess will automatically begin. 
                </p> 
                <img src={choosescrape}  className='img-fluid'/> 
                <p>
                    You will know that the scrape process is running by the spinning Logo to the right, indicating that the scrape is in process. Additionaly, you will see the updates appear in the console in the middle.
                    The console will show the prices that have been scraped, as well as any errors that occur in the process. 
                </p>
                <img src={loading}  className='img-fluid'/> 
                <p>
                    The scrape process will begin with scraping prices from blowoutcards.com, which requires a different process than retrieving data from the other websites. 
                    Therefor you will likely see a warning, asking for permission to accept incoming network connections. Press 'Allow'.
                </p>
                <img src={warning}  className='img-fluid'/> 
                <p>
                    <h5>Scrape Complete</h5>
                    Once the scrape process is completed and all price data has been saved, you will be notified with a message. 
                    Now you can scroll down to view the scraped prices in the Price Data field. Refresh the table to make sure all 
                    newly scraped prices are being displayed. You also have the option to search for a specific product in the search bar on the top right.
                </p>
                <img src={complete}  className='img-fluid'/> 
                <img src={prices}  className='img-fluid'/> 
                </>
            )}
        />
        <br />
        <Card 
            header="PRINT PRICE DATA"
            title='Print full Price Lists'
            body= {(
                <>
                <p>
                    On The Print Prices Tab you have the option the print full price lists with the entire price data of each Sports Category.
                    Inorder to export and print one of price list simply select one of the buttons. 
                </p>
                <img src={exportprice}  className='img-fluid'/> 
                <p>
                    Once you selected the price list you want to export and print, a new window will open and load the price data. 
                </p>
                <img src={pricelist}  className='img-fluid'/> 
                <p>
                    Wait for a few seconds for the page to load, and it will automatically save as a PDF file to your desktop. 
                    You will know the file was saved when an alert pops up and tells you that the file was saved to the desktop. 
                    You can now open the PDF file from your desktop and print it. Once the file is saved feel free to close the new price data window. 
                </p>
                <img src={pdfsaved}  className='img-fluid'/> 
                <p>
                    <h5>Print Selected Price Data Only</h5>
                    In the Print Price Selector below, you have the option to only print the prices of the products you select. You will see that you have a similar 
                    table as on price data table on the Dashboard. You have the option to search for specific products and select the products you want to print with the checkboxes 
                    on the left. The checkbox on the very top allows you to select and deselct all items. 
                    Once you have made your selection click on the Export Selected Data button next to the search box.
                    The export process works in the same fashion as the export and printing of the full price lists. A new window will open with the selected price list, and after 
                    a few seconds it will save as a PDF file to the desktop, and give you an alert when it is finished.
                </p>
                <img src={selected}  className='img-fluid'/> 
                <img src={selectedprices}  className='img-fluid'/> 
                </>
            )}
        />
        <br />
        <Card 
            header="BACKUP AND RECOVER"
            title="Backing Up Data"
            body={(
                <>
                    <p>
                        The Data Backup feature allows you backup all the entries you have made. This way can easily recover the data in case something goes wrong.
                        Also you have the possibilty to easily synchronize the data on multiple devices without having to seperatly input the data on each device.
                        To backup your data simply press the Backup all Data button on top. You will see an alert that informs you that the data backup was succesful.
                    </p>
                    <img src={backup} className='img-fluid'/> 
                    <img src={backupalert} className='img-fluid'/> 
                    <p>
                        <h5>Backup folder</h5>
                        The backup process automatically creates a folder on your Desktop called 'Price-Scraper-Backup'. In this folder you will have four .json files 
                        that contain the data entries. <br /><br />
                        <h6>BE ADVISED! The backup proccess will overwrite existing files in the 'Price-Scraper-Backup' folder on your desktop. If you wish to save multiple backups, save the backups in a different location to prevent overwriting.</h6>
                    </p>
                    <img src={folder} className='img-fluid'/> 
                    <p>
                        <h5>Data Recovery</h5>
                        To upload or recover from a Backup go to the Data Recovery Section. You will see four fields where you can click to upload or drag and drop the backup files.
                        The fields are designated for specific files, and are labeled accordingly. It is important to upload the correct files in the correct filds, to recover the data correctly.
                        Simply click on the field and select to correct file, or drag and drop the file on the field. You can upload / recover 1 or more files at a time, or all four files at the same time.
                        Once you have uploaded the files in the fields, select the 'Upload Back Data' button at the buttom. An alert will signal that the upload was successful.
                        You can check if the data is correctly updated by going to the data editor and refresh the table, and check if the data is complete and correct. If the data is not correct repeat the 
                        upload / recovery proccess. <br /><br />
                        <h6>BE ADVISED! The recovery proccess will overwrite the entry data in your application. Make sure to regulary backup your data to ensure no data is lost.</h6>
                    </p>
                    <img src={recover} className='img-fluid'/> 
                    <img src={upload} className='img-fluid'/> 
                </>
            )}
        />
        </>
    )
}

export default Help;