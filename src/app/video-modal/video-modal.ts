import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-modal.html',
  styleUrls: ['./video-modal.css']
})
export class VideoModalComponent {
  @Input() videoUrl: string = '';
  @Output() closeModal = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {}

  getSafeVideoUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

  onClose() {
    this.closeModal.emit();
  }
}
