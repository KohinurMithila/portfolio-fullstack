import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  @Input() about: any;

  contactName = '';
  contactEmail = '';
  contactMessage = '';

  showOptions = false;

  triggerOptions() {
    if (!this.contactName || !this.contactMessage) {
      alert('Please fill out your name and message.');
      return;
    }
    this.showOptions = !this.showOptions;
  }

  sendVia(method: 'whatsapp' | 'email') {
    const text = `Hi, I am ${this.contactName}.\nMy Email: ${this.contactEmail}\n\nMessage:\n${this.contactMessage}`;
    
    if (method === 'whatsapp') {
      const waNumber = this.about?.whatsapp?.replace(/[^0-9]/g, '');
      if (!waNumber) {
        alert('WhatsApp number is not available.');
        return;
      }
      const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    } else if (method === 'email') {
      const email = this.about?.email;
      if (!email) {
        alert('Email address is not available.');
        return;
      }
      const subject = `Message from ${this.contactName} via Portfolio`;
      const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
      const a = document.createElement('a');
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    this.showOptions = false;
  }
}
