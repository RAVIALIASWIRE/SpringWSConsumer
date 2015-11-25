
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class Test {

	public static void main(String[] args) {
	WebDriver driver = new FirefoxDriver();
	driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
	driver.get("http://localhost:8086/SpringWSConsumer/");
	driver.findElement(By.id("a")).sendKeys("34");
	driver.findElement(By.id("b")).sendKeys("4");
	driver.findElement(By.id("c")).click();
	
		
	}

}


