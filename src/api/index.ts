import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { useState, useEffect } from "react";


export const tokenApi = axios.create({
  baseURL: "https://still-cliffs-13111.herokuapp.com/http://shahinfarzane.com",
});

export const api = axios.create({
  baseURL:
    "https://still-cliffs-13111.herokuapp.com/http://shahinfarzane.com/wp-json/wp/v2/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  },
});



