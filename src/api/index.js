import axios from "axios";
import React, { useEffect, useState } from 'react';

const url = "http://covid19.mathdro.id/api";
export default async function FetchData(country) {
    let changeableUrl = url;
    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        const data = await fetch(changeableUrl);
        let response = await data.json()

        return {
            confirmed: response.confirmed,
            recovered: response.recovered,
            deaths: response.deaths,
            lastUpdate: response.lastUpdate
        }
    } catch (error) {
        console.log(error)
    }

}

export const fetchDailyData = async () => {
    try {
        const data = await fetch(`${url}/daily`);
        let response = await data.json()
        const modification = response.map((dailyData) => (
            {
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate
            }
        ))

        return modification

    } catch (error) {
        console.log(error)
    }
}

export const countries = async () => {
    try {
        const data = await fetch(`${url}/countries`);
        let { countries } = await data.json()
        return countries.map(country => country.name)

    } catch (error) {
        console.log(error)

    }
}
