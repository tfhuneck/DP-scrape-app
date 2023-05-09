import '../index.css';
import Card from './Component'
import DataDisplay from './DataDisplay';
import Loading from './Loading';
import { useState } from 'react';

function Dashboard() {

    const [displayloading, setDisplayLoading] = useState(false);

    async function basketball(){
        setDisplayLoading(true)
        await window.scrapeBasketballApi.scrapeBasketball()
            .then((res) => {
            setDisplayLoading(false);
            alert(res)})
            .catch((error) =>{
            setDisplayLoading(false);
            alert(error)})
    }
    async function baseball(){
         setDisplayLoading(true)
        await window.scrapeBaseballApi.scrapeBaseball()
        .then((res) => {
            setDisplayLoading(false);
            alert(res)})
            .catch((error) =>{
            setDisplayLoading(false);
            alert(error)})
    }
    async function football(){
        setDisplayLoading(true)
        await window.scrapeFootballApi.scrapeFootball()
        .then((res) => {
            setDisplayLoading(false);
            alert(res)})
            .catch((error) =>{
            setDisplayLoading(false);
            alert(error)})
    }
    async function other(){
        setDisplayLoading(true)
        await window.scrapeOtherApi.scrapeOther()
        .then((res) => {
            setDisplayLoading(false);
            alert(res)})
            .catch((error) =>{
            setDisplayLoading(false);
            alert(error)})
    }
    async function all(){
        setDisplayLoading(true)
        await window.scrapeAllApi.scrapeAll()
        .then((res) => {
            setDisplayLoading(false);
            alert(res)})
            .catch((error) =>{
            setDisplayLoading(false);
            alert(error)})
    }

    const ShowLoading = () =>{
        if(displayloading){
            return <Loading/>
        }else{
            return
        }
    }

    return (
        <>
        <Card
            class="dashboard"
            header="DASHBOARD"
            text={(<ShowLoading/>)}
            body={(
                <>
                    {/* <div className="btn-group"> */}
                        <button onClick={all} type='button' className='btn btn-outline-danger scrp'>Run All Scrapes</button><br/>
                        <button onClick={basketball} type="button" className="btn btn-outline-dark scrp">Scrape Basketball Prices</button><br/>
                        <button onClick={baseball} type="button" className="btn btn-outline-dark scrp">Scrape Baseball Prices</button><br/>
                        <button onClick={football} type="button" className="btn btn-outline-dark scrp">Scrape Football Prices</button><br/>
                        <button onClick={other} type="button" className="btn btn-outline-dark scrp">Scrape Other Prices</button>  
                    {/* </div> */}
                </>
            )}
        />
        <br/>
            <Card 
                class="editor overflow-x-scroll"
                header="PRICE DATA"
                body={(<DataDisplay/>)}
            />
        </>
    )
}

export default Dashboard;