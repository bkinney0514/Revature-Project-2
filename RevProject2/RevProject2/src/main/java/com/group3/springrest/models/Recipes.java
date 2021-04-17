package com.group3.springrest.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Recipes")
public class Recipes {
	
	private long recipe_id;
	private String recipe_name;
	private String skill_level;

	public Recipes() {
		
	}
	
	public Recipes(long recipe_id, String recipe_name, String skill_level) {
		this.recipe_id = recipe_id; 
		this.recipe_name = recipe_name;
		this.skill_level = skill_level;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getRecipe_id() {
		return recipe_id;
	}

	public void setRecipe_id(long recipe_id) {
		this.recipe_id = recipe_id;
	}

	@Column(name = "recipe_name", nullable = false)
	public String getRecipe_name() {
		return recipe_name;
	}

	public void setRecipe_name(String recipe_name) {
		this.recipe_name = recipe_name;
	}

	@Column(name = "skill_level", nullable = false)
	public String getSkill_level() {
		return skill_level;
	}

	public void setSkill_level(String skill_level) {
		this.skill_level = skill_level;
	}
	
}
