package api.datos_coronavirus_back.model;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
public class Country{
	
	@Id
	@NotNull
	@JsonProperty("Country")
	private String country;
	
	@Column(name = "new-confirmed")
	@JsonProperty("NewConfirmed")
	private int newConfirmed;
	
	@Column(name = "total-confirmed")
	@JsonProperty("TotalConfirmed")
	private int totalConfirmed;
	
	@Column(name = "new-deaths")
	@JsonProperty("NewDeaths")
	private int newDeaths;
	
	@Column(name = "total-deaths")
	@JsonProperty("TotalDeaths")
	private int totalDeaths;
	
	@Column(name = "new-recovered")
	@JsonProperty("NewRecovered")
	private int newRecovered;
	
	@Column(name = "total-recovered")
	@JsonProperty("TotalRecovered")
	private int totalRecovered;
	
	public Country() {
		
	}
	
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public int getTotalConfirmed() {
		return totalConfirmed;
	}
	public void setTotalConfirmed(int totalConfirmed) {
		this.totalConfirmed = totalConfirmed;
	}
	public int getNewDeaths() {
		return newDeaths;
	}
	public void setNewDeaths(int newDeaths) {
		this.newDeaths = newDeaths;
	}
	public int getTotalDeaths() {
		return totalDeaths;
	}
	public void setTotalDeaths(int totalDeaths) {
		this.totalDeaths = totalDeaths;
	}
	public int getNewRecovered() {
		return newRecovered;
	}
	public void setNewRecovered(int newRecovered) {
		this.newRecovered = newRecovered;
	}
	public int getTotalRecovered() {
		return totalRecovered;
	}
	public void setTotalRecovered(int totalRecovered) {
		this.totalRecovered = totalRecovered;
	}
	
	
	
}