package api.datos_coronavirus_back.rest;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

import api.datos_coronavirus_back.model.Country;
import api.datos_coronavirus_back.model.CountryDayOne;
import api.datos_coronavirus_back.model.CountryName;
import api.datos_coronavirus_back.model.Global;
import api.datos_coronavirus_back.repository.CountryDayOneRepository;
import api.datos_coronavirus_back.repository.CountryNamesRepository;
import api.datos_coronavirus_back.repository.GlobalRepository;

@Path("/summary")
public class EndPoint{
	
	@Inject
	private GlobalRepository globalRepository;
	
	@Inject
	private CountryNamesRepository countryNamesRepository;
	
	@Inject 
	private CountryDayOneRepository countryDayOneRepository;
	
	@GET 
	@Produces(MediaType.APPLICATION_JSON)
	public Response getGlobalSummary() {
		Global global = null;
		global = globalRepository.getGlobal();
		
		if (global == null) {
			Response.status(Response.Status.NO_CONTENT).build();
		}
		
		return Response.ok(global).build();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/countries")
	public Response getCountriesSummary() {
		
		List<Country> countryList = Arrays.asList(globalRepository.getCountry());
		
		if(countryList == null) {
			Response.status(Response.Status.NO_CONTENT).build();
		}
		
		return Response.ok(countryList).build();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/country-names")
	public Response getCountryNames() {
		List<CountryName> countryNamesList = Arrays.asList(countryNamesRepository.getCountryName());
		
		if(countryNamesList == null) {
			Response.status(Response.Status.NO_CONTENT).build();
		}
		
		return Response.ok(countryNamesList).build();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/day-one/{country}")
	public Response getCountryDayOne(@PathParam("country") String countryName) {
		List<CountryDayOne> countryDayOneList = Arrays.asList(countryDayOneRepository.getCountryDayOne(countryName));
		
		if(countryDayOneList == null) {
			Response.status(Response.Status.NO_CONTENT).build();
		}
		
		Iterator<CountryDayOne> it = countryDayOneList.iterator(); 
		while(it.hasNext()) {
			CountryDayOne country = it.next();
			LocalDate date = LocalDate.parse(country.getRawDate().substring(0,10));
			country.setDate(date);
		}
		
		return Response.ok(countryDayOneList).build();
	}
	
	
}