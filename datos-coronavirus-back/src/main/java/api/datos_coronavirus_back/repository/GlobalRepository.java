package api.datos_coronavirus_back.repository;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import api.datos_coronavirus_back.model.Country;
import api.datos_coronavirus_back.model.Global;
import api.datos_coronavirus_back.model.Info;

public class GlobalRepository{
	
	Info info = null;
	
	public GlobalRepository() {
		ObjectMapper objectMapper = new ObjectMapper();
		try {
			info =  objectMapper.readValue(new URL("https://api.covid19api.com/summary"), Info.class);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	public Global getGlobal() {
		return info.getGlobal();
	}
	
	public Country[] getCountry() {
		return info.getCountries();
	}

	
	
}