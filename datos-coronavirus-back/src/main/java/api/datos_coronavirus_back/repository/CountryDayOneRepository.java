package api.datos_coronavirus_back.repository;

import java.io.IOException;
import java.net.URL;

import com.fasterxml.jackson.databind.ObjectMapper;

import api.datos_coronavirus_back.model.CountryDayOne;

public class CountryDayOneRepository{
	
	public CountryDayOne[] getCountryDayOne(String countryName){
		
		ObjectMapper objectMapper = new ObjectMapper();
		
		CountryDayOne[] countryDayOne = null;
		
		try {
			countryDayOne = objectMapper.readValue(new URL("https://api.covid19api.com/dayone/country/" + countryName), CountryDayOne[].class);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return countryDayOne;
 		
	}
	
	
}