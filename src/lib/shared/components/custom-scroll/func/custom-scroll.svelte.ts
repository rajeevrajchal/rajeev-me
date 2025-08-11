export class CustomScroll {
	private scrollElement: HTMLElement | undefined = $state();
	private scrollContent: HTMLElement | undefined = $state();

	constructor({
		scrollElement,
		scrollContent
	}: {
		scrollElement: HTMLElement;
		scrollContent: HTMLElement;
	}) {
		this.scrollElement = scrollElement;
		this.scrollContent = scrollContent;
	}

	public addEventListener = () => {
		window.addEventListener('scroll', this.scrollHandler);
	};

	public removeEventListener = () => {
		window.removeEventListener('scroll', this.scrollHandler);
	};

	private scrollHandler = (event: Event) => {
		if (!this.scrollElement) return;
		event.preventDefault();
		const rect = this.scrollElement.getBoundingClientRect();
		const area = {
			height: this.scrollElement.offsetHeight,
			y: rect.y
		};
		const contentHeight = this.scrollContent?.offsetHeight || 0;

		const ratio = (1 / area.height) * (rect.y - area.y);

		console.log('the react', {
			rect,
			area,
			contentHeight,
			ratio
		});
	};
}
