import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core';
import {countries} from "../../api/index"
import styles from "./countrypicker.module.css"
const CountryPicker = ({handleCountryChange}) => {
        const [countryData,setCountryData]= useState([])
        useEffect(()=>{
            async function fetchCountries(){
            setCountryData(await countries())
            }
            fetchCountries()
            console.log(countryData)
        },[setCountryData])

    return ( 
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}}>
                <option value = "">
                    Global
                </option>
                {countryData.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
     );
}
 
export default CountryPicker;