import React from "react";

const IndexSample = () => {
	return (
		<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			<h2 className="text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">회사소개</h2>
			<div className="mt-8">
				<p className="text-lg leading-6 text-gray-600">저희 회사는 고객의 만족을 최우선으로 하는 기업입니다. 최고의 서비스와 제품을 제공하여 고객의 신뢰를 얻는 것을 목표로 합니다.</p>
				<p className="mt-4 text-lg leading-6 text-gray-600">저희 회사는 끊임없이 혁신하고 발전하는 기업입니다. 새로운 기술과 아이디어를 도입하여 고객의 삶을 개선하는 것을 목표로 합니다.</p>
			</div>
			<div className="mt-8 flex justify-center">
				<button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">더 알아보기</button>
			</div>
		</div>
	);
};

export default IndexSample;
