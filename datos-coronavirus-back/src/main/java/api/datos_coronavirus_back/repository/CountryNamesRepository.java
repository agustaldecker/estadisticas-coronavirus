package api.datos_coronavirus_back.repository;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import api.datos_coronavirus_back.model.CountryName;


public class CountryNamesRepository{
	
	public CountryName[] getCountryName(){
		ObjectMapper objectMapper = new ObjectMapper();
		CountryName[] countryNames = null;
		try {
			countryNames = objectMapper.readValue(new URL("https://api.covid19api.com/countries"), CountryName[].class);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return countryNames;
	}
	
}