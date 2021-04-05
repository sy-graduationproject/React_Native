package com.rm.app.refrigerator_management_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class RefrigeratorManagementAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(RefrigeratorManagementAppApplication.class, args);
	}

}
