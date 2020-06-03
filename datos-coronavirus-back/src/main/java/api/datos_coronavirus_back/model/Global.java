package api.datos_coronavirus_back.model;

import javax.persistence.*;
import javax.validation.constraints.Min;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class Global{
	
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
	
	public Global() {
		
	}
	
	public void setNewConfirmed(int newConfirmed) {
		this.newConfirmed = newConfirmed;
	}
	
	public int getNewConfirmed() {
		return newConfirmed;
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