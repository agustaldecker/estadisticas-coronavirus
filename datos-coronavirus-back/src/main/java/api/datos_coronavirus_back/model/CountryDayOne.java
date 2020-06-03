package api.datos_coronavirus_back.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CountryDayOne{
	
	@JsonProperty("Country")
	private String name;
	
	@JsonProperty("Confirmed")
	private int confirmed;
	
	@JsonProperty("Deaths")
	private int deaths;
	
	@JsonProperty("Recovered")
	private int recovered;
	
	@JsonProperty("Active")
	private int active;
	
	@JsonProperty("Date")
	private String rawDate;
	
	private LocalDate date;

	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getConfirmed() {
		return confirmed;
	}

	public void setConfirmed(int confirmed) {
		this.confirmed = confirmed;
	}

	public int getDeaths() {
		return deaths;
	}

	public void setDeaths(int deaths) {
		this.deaths = deaths;
	}

	public int getRecovered() {
		return recovered;
	}

	public void setRecovered(int recovered) {
		this.recovered = recovered;
	}

	public int getActive() {
		return active;
	}

	public void setActive(int active) {
		this.active = active;
	}

	public String getRawDate() {
		return rawDate;
	}

	public void setRawDate(String rawDate) {
		this.rawDate = rawDate;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	
}