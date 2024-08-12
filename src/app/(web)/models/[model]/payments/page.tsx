export default function Payments () {
  return(
    <section>

      <div className="ml-[300px] pt-[250px] flex gap-x-[80px]">
        {/* 옵션 선택 정보 */}
        <div className="flex flex-col gap-y-[70px]">
          <article className="flex items-end gap-x-[20px]">
            <h2 className="text-[40px]">김모건</h2><h3 className="text-[30px]">님께서 선택하신 옵션</h3>
          </article>

          {/* 차량 정보 */}
          <article className="border-t-[1px] border-[#a4a4a4]">
            <h3 className="text-[25px] font-bold mt-[27px]">차량정보</h3>
            <table className="mt-[27px] text-[20px]">
              <tbody>
                <tr className="grid grid-cols-[100px_auto] gap-x-[140px] mb-[15px]">
                  <th className="text-right">모델명</th>
                  <td>G90 Black</td>
                </tr>
                <tr className="grid grid-cols-[100px_auto] gap-x-[140px] mb-[15px]">
                  <th className="text-right">선택색상</th>
                  <td className="flex gap-x-[10px]"><div className="w-[200px] h-full bg-white"></div><span>| Cerulian Blue</span></td>
                </tr>
                <tr className="grid grid-cols-[100px_auto] gap-x-[140px] mb-[15px]">
                  <th className="text-right">선택옵션</th>
                  <td>
                    <table>
                      <tbody className="flex flex-col gap-y-[10px]">
                        <tr className="grid grid-cols-[1fr_4fr_1fr]">
                          <th className="bg-white text-black mr-[15px] rounded-[10px]">엔진</th>
                          <td>4단 자동 변속기</td>
                          <td>110,232원</td>
                        </tr>
                        <tr className="grid grid-cols-[1fr_4fr_1fr]">
                          <th className="bg-white text-black mr-[15px] rounded-[10px]">엔진</th>
                          <td>4단 자동 변속기</td>
                          <td>110,232원</td>
                        </tr>
                        <tr className="grid grid-cols-[1fr_4fr_1fr]">
                          <th className="bg-white text-black mr-[15px] rounded-[10px]">외장옵션</th>
                          <td>어쩌구저쩌구</td>
                          <td>110,232원</td>
                        </tr>
                        <tr className="grid grid-cols-[1fr_4fr_1fr]">
                          <th className="bg-white text-black mr-[15px] rounded-[10px]">엔진</th>
                          <td>4단 자동 변속기</td>
                          <td>110,232원</td>
                        </tr>
                        <tr className="flex gap-x-[10px] justify-end mt-[30px]">
                          <td>옵션총합</td>
                          <td>110,232원</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>

          {/* 배송 정보 */}
          <article className="border-t-[1px] border-[#a4a4a4]">
            <h3 className="text-[25px] font-bold mt-[27px]">배송정보</h3>
            <table className="mt-[27px] text-[20px]">
              <tbody>
                <tr className="grid grid-cols-[100px_auto] gap-x-[140px] mb-[15px]">
                  <th className="text-right">인수방법</th>
                  <td>매장배송</td>
                </tr>
                <tr className="grid grid-cols-[100px_auto] gap-x-[140px] mb-[15px]">
                  <th className="text-right">배송지역</th>
                  <td className="flex gap-x-[10px]">
                    <select name="" id="" className="text-black">
                      <option value="01">시/군/구 선택</option>
                      <option value="01">지역2</option>
                      <option value="01">지역3</option>
                    </select>
                    <select name="" id="" className="text-black">
                      <option value="01">동/읍/리 선택</option>
                      <option value="01">지역2</option>
                      <option value="01">지역3</option>
                    </select>
                  </td>
                </tr>
                <tr className="grid grid-cols-[100px_auto] gap-x-[140px] mb-[15px]">
                  <th className="text-right">출고센터</th>
                  <td>노원구센터</td>
                </tr>
                <tr className="grid grid-cols-[100px_auto] gap-x-[140px] mb-[15px]">
                  <th className="text-right">예상출고일</th>
                  <td>즉시출고가능</td>
                </tr>

                
              </tbody>
            </table>
            <div className="flex gap-x-[10px] justify-end mt-[30px] text-[20px]">
                <span>옵션총합</span>
                <span>110,232원</span>
            </div>
          </article>

          {/* 등록비용 */}
          <article className="border-t-[1px] border-[#a4a4a4]">
            <div className="flex justify-between items-center mt-[20px]">
              <h3 className="text-[25px] font-bold">등록비용</h3>
              <select name="" id="" className="text-black w-[80px] h-[50px]">
                <option value="">일반인</option>
                <option value="">모건</option>
                <option value="">수연</option>
              </select>

            </div>
            
            <table className="mt-[27px] text-[20px] w-full">
              <tbody>
                <tr className="flex justify-between gap-x-[140px] mb-[15px] ml-[20px]">
                  <th className="text-right">취득세</th>
                  <td className="flex gap-x-[10px]"><span>0</span>원</td>
                </tr>
                <tr className="flex justify-between gap-x-[140px] mb-[15px] ml-[20px]">
                  <th className="text-right">공채</th>
                  <td className="flex gap-x-[10px]"><span>0</span>원</td>
                </tr>
                <tr className="flex justify-between gap-x-[140px] mb-[15px] ml-[20px]">
                  <th className="text-right">증지대</th>
                  <td className="flex gap-x-[10px]"><span>0</span>원</td>
                </tr>
                <tr className="flex justify-between gap-x-[140px] mb-[15px] ml-[20px]">
                  <th className="text-right">번호 (필름식기준)</th>
                  <td className="flex gap-x-[10px]"><span>0</span>원</td>
                </tr>
                <tr className="flex justify-between gap-x-[140px] mb-[15px] ml-[20px]">
                  <th className="text-right">등록대행 수수료</th>
                  <td className="flex gap-x-[10px]"><span>0</span>원</td>
                </tr>
            
              </tbody>
            </table>
            <div className="flex gap-x-[10px] justify-end mt-[30px] text-[20px]">
                <span>등록비용 총합</span>
                <span>110,232원</span>
            </div>
          </article>


          {/* 총 결제금액 */}
          <article className="border-t-[1px] border-[#a4a4a4]">
            <div className="flex justify-between items-center mt-[20px]">
              <h3 className="text-[25px] font-bold">결제금액</h3>
              <div className="flex gap-x-[10px] items-center">
                <span className="text-right">총 차량 구매금액(a + b)</span>
                <div className="text-[30px]"><span>12,345,431</span>원</div>
              </div>
            </div>
            
            
            <div className="flex gap-x-[10px] justify-end mt-[30px] text-[20px]">
                <span>차량 구매 금액 (a)</span>
                <span>110,232원</span>
            </div>
            <div className="flex gap-x-[10px] justify-end text-[20px]">
                <span>임시 운행 의무보험료 (b)</span>
                <span>110,232원</span>
            </div>
          </article>
        </div>




        {/* 결제 요약 */}
        <div>
          <article className="w-[660px] py-[80px] bg-[#333] rounded-[5px]">
            <img src="/images/detail/defaultCar.png" alt="" />
            <div className="px-[60px] flex flex-col items-center">

              <section className="border-b-[1px] border-[#a4a4a4] w-full py-[20px]">
                <h3 className="font-Hyundai-sans font-light text-[20px]">G123 BLACK</h3>
                <ul className="ml-[20px]">
                  <li>Cerulian Blue</li>
                  <li>4단 변속기 외 <span>00</span>건</li>
                </ul>
              </section>

              <section className="border-b-[1px] border-[#a4a4a4] w-full py-[20px]">
                <div className="flex justify-between">
                  <h3 className="font-Hyundai-sans font-light text-[20px]">총 차량 구매 금액</h3>
                  <span>
                    <span className="text-[20px]">321,123,12</span>원
                  </span>
                </div>
                <div className="ml-[20px] border-[1px] border-[#bbb]  mt-[12px] py-[20px]">
                  <table className="w-[calc(100%-20px)]">
                    <tbody className="text-[15px] flex flex-col gap-y-[12px]">
                      <tr className="flex w-full">
                        <th className="font-light basis-1/4">차량 금액</th>
                        <td className="basis-3/4 text-right"><span>12,212,1231</span>원</td>
                      </tr>
                      <tr className="flex w-full">
                        <th className="font-light basis-1/4">배송비</th>
                        <td className="basis-3/4 text-right"><span>금액미정</span></td>
                      </tr>
                      <tr className="flex w-full">
                        <th className="font-light basis-1/4">할인 금액</th>
                        <td className="basis-3/4 text-right"><span>-0</span>원</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="w-full py-[50px]">
    
                <div className="flex justify-between w-full">
                  <h3 className="font-Hyundai-sans font-light text-[20px]">총 견적합계</h3>
                  <span><span className="text-[30px]">32,123,123</span>원</span>
                </div>
                <div className="flex justify-between w-full">
                  <h3 className="font-Hyundai-sans font-light text-[20px]">등록비용</h3>
                  <span><span className="text-[20px]">75,000</span>원</span>
                </div>
   
              </section>

              <section className="text-[20px] flex gap-x-[30px]">
                <button className="bg-white text-black px-[20px] py-[15px]">결제하기</button>
                <button className="px-[20px]">커스텀 저장</button>
              </section>
            </div>
            
          </article>
        </div>


      </div>



    </section>

  )
}