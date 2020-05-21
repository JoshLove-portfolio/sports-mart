
export class Seller {
	constructor (
		public name: string,
		public phoneNumber: string,
		public streetAddress: string,
		public city: string,
		public state: string,
		public zipCode: string,
	) {}
}

export class Item {
	constructor (
		public name: string,
		public price: number,
		public category: string,
		public description: string,
		public barcode: number,
		public sellerId: number,
		public sold: boolean,
	) {}
}