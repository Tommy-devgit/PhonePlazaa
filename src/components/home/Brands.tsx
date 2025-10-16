import asus from "../../assets/trustedBrands/asus.png";
import apple from "../../assets/trustedBrands/social.png";
import google from "../../assets/trustedBrands/google.png";
import samsung from "../../assets/trustedBrands/samsung.png";
import huawei from "../../assets/trustedBrands/huawei (1).png";
import xiaomi from "../../assets/trustedBrands/xiaomi.png";
import lg from "../../assets/trustedBrands/lg.png";
import sony from "../../assets/trustedBrands/sony.png";
import oppo from "../../assets/trustedBrands/oppo.png";
import vivo from "../../assets/trustedBrands/vivo.png";
import motorola from "../../assets/trustedBrands/motorola.png";



const brands = [asus, apple, samsung, google, huawei, xiaomi, lg, sony, oppo, vivo, motorola];

export default function Brands() {
  return (
    <section className="px-6 md:px-24 py-24 bg-[#b1141488] text-white rounded-full">
      <h2 className="text-4xl font-bold text-center mb-12">Trusted Brands</h2>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {brands.map((b, idx) => (
          <img key={idx} src={b} alt={`Brand ${idx}`} className="h-16 object-contain" />
        ))}
      </div>
    </section>
  );
}
