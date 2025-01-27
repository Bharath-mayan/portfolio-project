import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  menuBarImage: string = '/assets/images/menu-bar.png';
  showMenu: boolean = false;
  activeBlock: any = '';

  @ViewChild('home', { static: false }) goToHome!: ElementRef;
  @ViewChild('about', { static: false }) goToAbout!: ElementRef;
  @ViewChild('projects', { static: false }) goToProject!: ElementRef;
  @ViewChild('skills', { static: false }) goToSkill!: ElementRef;
  @ViewChild('services', { static: false }) goToService!: ElementRef;
  @ViewChild('contacts', { static: false }) goToContact!: ElementRef;



  ngOnInit(): void {

  }

  visibleMenu() {
    const navList: any = document.getElementById("nav");
    navList.style.display = "block";

    this.showMenu = true;
    this.menuBarImage = this.menuBarImage === '/assets/images/menu-bar.png' ? '/assets/images/close_bar.png' : '/assets/images/menu-bar.png';
    if (this.menuBarImage != '/assets/images/close_bar.png')
      navList.style.display = "none";
    this.showMenu = !this.showMenu;
  }

  showBlock(barName: any) {
    this.activeBlock = barName;
    // console.log("WWWWW",window.window.innerWidth)
    if (window.window.innerWidth < 772) {
      this.visibleMenu();
    }
    if (this.activeBlock === 'Home') {
      this.scrollToSection(this.goToHome);
    } else if (this.activeBlock === 'About') {
      this.scrollToSection(this.goToAbout);
    } else if (this.activeBlock === 'Projects') {
      this.scrollToSection(this.goToProject);
    } else if (this.activeBlock === 'Services') {
      this.scrollToSection(this.goToService);
    } else if (this.activeBlock === 'Skills') {
      this.scrollToSection(this.goToSkill);
    } else if (this.activeBlock === 'Contacts') {
      this.scrollToSection(this.goToContact);
    }
  }

  private scrollToSection(section: ElementRef) {
    section.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }



}

