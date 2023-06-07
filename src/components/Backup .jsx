import Card from './Component';
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

function Backup() {
    const fileTypes = ["json"];  
    const [basketballBackup, setBasketballBackup] = useState(null);
    const [baseballBackup, setBaseballBackup] = useState(null);
    const [footballBackup, setFootballBackup] = useState(null);
    const [otherBackup, setOtherBackup] = useState(null);
    const reader = new FileReader();
    
    
    const handleBasketball = (basketball) => {
        reader.onload = () => setBasketballBackup(JSON.parse(reader.result));
        var result = reader.readAsText(basketball);
        };
    const handleBaseball = (baseball) => {
        reader.onload = () => setBaseballBackup(JSON.parse(reader.result));
        var result = reader.readAsText(baseball);
        };
    const handleFootball = (football) => {
        reader.onload = () => setFootballBackup(JSON.parse(reader.result));
        var result = reader.readAsText(football);
        };
    const handleOther = (other) => {
        reader.onload = () => setOtherBackup(JSON.parse(reader.result));
        var result = reader.readAsText(other);
        };
   
    const backupAll = () => {
        window.BackupApi.backupData();
        // alert('Backup was successful. Check `Price-Scraper-Backup` Folder on your Desktop');
        sessionStorage.setItem('alerts', JSON.stringify({"page": "Backup","message":'Backup was successful. Check `Price-Scraper-Backup` Folder on your Desktop',"id":"backup"}));
        window.location.reload(false);
    }

    const uploadAll = async () => {
      if (basketballBackup) {window.RecoverBasketballApi.upload(basketballBackup);};
      if (baseballBackup) {window.RecoverBaseballApi.upload(baseballBackup)};
      if (footballBackup) {window.RecoverFootballApi.upload(footballBackup)};
      if (otherBackup) {window.RecoverOtherApi.upload(otherBackup)};
    //   alert('Data Recovery was successful. Check Data Editor for Data');
      sessionStorage.setItem('alerts', JSON.stringify({"page": "Backup","message":'Data Recovery was successful. Check Data Editor for Data',"id":"recover"}));
      window.location.reload(false);
    };

    return (

        <>
            <Card
                header='DATA BACKUP'
                title="Backup"
                body={(
                    <button onClick={backupAll} type='button' className='btn btn-outline-danger scrp'>Backup all Data</button>
                )}
            />
            <br/>
            <Card
                header='DATA RECOVERY'
                title="Upload Data Backups"
                body={(
                    <>
                    <form className='form-control'>
                        <br/>
                        Upload basketballdata.json
                        <FileUploader handleChange={handleBasketball} label="Upload or drop basketballdata.json right here" name="basketball" types={fileTypes} />
                        <br/>
                        Upload baseballdata.json
                        <FileUploader handleChange={handleBaseball} label="Upload or drop baseballdata.json right here" name="baseball" types={fileTypes} />
                        <br/>
                        Upload footballdata.json
                        <FileUploader handleChange={handleFootball} label="Upload or drop footballdata.json right here" name="football" types={fileTypes} />
                        <br/>
                        Upload otherdata.json
                        <FileUploader handleChange={handleOther} label="Upload or drop otherdata.json right here" name="other" types={fileTypes} />
                        <br/>
                    </form>
                    <br/>
                    <button onClick={uploadAll} type='button' className='btn btn-outline-primary scrp'>Upload Backup Data</button>
                    </>
                )}
            />
        </>
    )
}

export default Backup;