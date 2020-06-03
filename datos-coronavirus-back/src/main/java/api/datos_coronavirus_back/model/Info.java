package api.datos_coronavirus_back.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Info{
	
	@JsonProperty("Global")
	private Global global;
	
	@JsonProperty("Countries")
	private Country[] countries;
	
	public Info() {
		
	}

	public Global getGlobal() {
		return global;
	}

	public void setGlobal(Global global) {
		this.global = global;
	}

	public Country[] getCountries() {
		return countries;
	}

	public void setCountries(Country[] countries) {
		this.countries = countries;
	}
	
	
	
}