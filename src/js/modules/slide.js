import debouence from './debounce.js';
export class Slide {
  constructor(slide, wrap) {
    this.slide = document.querySelector(slide);
    this.wrap = document.querySelector(wrap);
    this.dist = {
      finalPosition: 0,
      startX: 0,
      movement: 0,
    };
    this.activeClass = 'active';
    this.changeEvent = new Event('changeEvent');
  }

  mouseUpOut() {
    document.addEventListener('mouseup', (event) => {
      if (!this.wrap.contains(event.target)) {
        const moveType = event.type === 'mouseup' ? 'mousemove' : 'touchmove';
        this.wrap.removeEventListener(moveType, this.onMove);
        this.dist.finalPosition = this.dist.movePosition;
        this.transition(true);
        this.changeSlideOnEnd();
      }
    });
  }

  transition(active) {
    this.slide.style.transition = active ? 'transform .6s' : '';
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px,0,0)`;
  }

  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.5;
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(event) {
    let moveType;
    if (event.type === 'mousedown') {
      event.preventDefault();
      this.dist.startX = event.clientX;
      moveType = 'mousemove';
    } else {
      this.dist.startX = event.changedTouches[0].clientX;
      moveType = 'touchmove';
    }
    this.wrap.addEventListener(moveType, this.onMove);
    this.transition(false);
  }

  onMove(event) {
    const pointerPosition =
      event.type === 'mousemove'
        ? event.clientX
        : event.changedTouches[0].clientX;
    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onEnd(event) {
    const moveType = event.type === 'mouseup' ? 'mousemove' : 'touchmove';
    this.wrap.removeEventListener(moveType, this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
    this.transition(true);
    this.changeSlideOnEnd();
  }

  changeSlideOnEnd() {
    if (this.dist.movement > 120 && this.index.next !== undefined) {
      this.activeNextSlide();
    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {
      this.activePrevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
  }

  addSlideEvent() {
    /*     this.wrap.addEventListener('mousedown', this.onStart);
    this.wrap.addEventListener('touchstart', this.onStart);
    this.wrap.addEventListener('mouseup', this.onEnd);
    this.wrap.addEventListener('touchend', this.onEnd); */
  }

  slidePosition(slide) {
    const margin = (this.wrap.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slideConfig() {
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return { position, element };
    });
  }

  slidesIndexNav(index) {
    const last = this.slideArray.length - 1;
    /* prev: Index existir dara index - 1 caso nao undefined */
    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === last ? undefined : index + 1,
    };
  }

  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.moveSlide(activeSlide.position);
    this.slidesIndexNav(index);
    this.dist.finalPosition = activeSlide.position;
    this.changeActiveClass();
    this.wrap.dispatchEvent(this.changeEvent);
  }

  changeActiveClass() {
    this.slideArray.forEach((item) =>
      item.element.classList.remove(this.activeClass),
    );
    this.slideArray[this.index.active].element.classList.add(this.activeClass);
  }

  activePrevSlide() {
    if (this.index.prev !== undefined) {
      this.changeSlide(this.index.prev);
    }
  }

  activeNextSlide() {
    if (this.index.next !== undefined) {
      this.changeSlide(this.index.next);
    }
  }

  onResize() {
    setTimeout(() => {
      this.slideConfig();
      this.changeSlide(this.index.active);
    }, 1000);
  }

  addResizeEvent() {
    window.addEventListener('resize', this.onResize);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onResize = debouence(this.onResize.bind(this), 200);

    this.activeNextSlide = this.activeNextSlide.bind(this);
    this.activePrevSlide = this.activePrevSlide.bind(this);
  }

  init() {
    this.bindEvents();
    this.transition(true);
    this.mouseUpOut();
    this.addSlideEvent();
    this.slideConfig();
    this.changeSlide(0);
    this.addResizeEvent();
    return this;
  }
}

export class SlideNav extends Slide {
  constructor(slide, wrap) {
    super(slide, wrap);
    this.bindControlEvents();
  }
  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);
    this.addArrowEvent();
  }
  addArrowEvent() {
    this.prevElement.addEventListener('click', this.activePrevSlide);
    this.nextElement.addEventListener('click', this.activeNextSlide);
  }
  createControl() {
    const control = document.createElement('ul');
    this.slideArray.forEach((item, index) => {
      control.innerHTML += `<li><a href='#slide${index + 1}'>${
        index + 1
      }</a></li>`;
    });
    this.wrap.appendChild(control);
    control.dataset.control = 'slide';
    return control;
  }

  eventControl(item, index) {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      this.changeSlide(index);
    });
    this.wrap.addEventListener('changeEvent', this.activeControlItem);
  }

  activeControlItem() {
    this.controlArray.forEach((item) =>
      item.classList.remove(this.activeClass),
    );
    this.controlArray[this.index.active] &&
      this.controlArray[this.index.active].classList.add(this.activeClass);
  }

  addControl(customControl) {
    this.control =
      document.querySelector(customControl) || this.createControl();
    this.controlArray = [...this.control.children];
    this.controlArray.forEach(this.eventControl);
    this.activeControlItem();
  }

  bindControlEvents() {
    this.eventControl = this.eventControl.bind(this);
    this.activeControlItem = this.activeControlItem.bind(this);
  }
}
