package com.aprent.index;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class IndexController {

	@Autowired
	private MessageSource messageSource;

	@RequestMapping({ "/", "" })
	String start() {

		return "index";
	}

	@RequestMapping("/home")
	String home() {

		return "index";
	}

	@RequestMapping("/gallery")
	String gallery() {

		return "gallery";
	}

	@RequestMapping("/animation")
	String animation() {

		return "animation";
	}

	@RequestMapping("/price")
	String price() {

		return "home";
	}

	@RequestMapping("/contact")
	String contact() {

		return "home";
	}

	@RequestMapping("/us")
	String us() {

		return "home";
	}

}