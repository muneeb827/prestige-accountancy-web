import Link from "next/link";
import { locationsData } from "@/data/locationsData";
import { MapPin, ArrowRight, Car, Building2, CheckCircle2 } from "lucide-react";

export default function LocalTownCoverage() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-100/70 px-3 py-1 rounded-full mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#00368C]" />
            <span>Local West Yorkshire Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Accountancy Services in Huddersfield &amp; Surrounding Towns
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Headquartered at 9 Blackmoorfoot Road, Huddersfield (HD4 5AQ), we deliver hands-on, accessible accounting, bookkeeping, VAT, and CIS services across Calderdale and Kirklees.
          </p>
        </div>

        {/* Town Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {locationsData.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group bg-white p-5 rounded-2xl border border-slate-200 hover:border-[#00368C] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#00368C] bg-blue-50 px-2 py-0.5 rounded">
                    {loc.postcodes.join(", ")}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00368C] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#00368C] transition-colors">
                  {loc.town}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {loc.shortDesc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                <Car className="w-3.5 h-3.5 text-[#00368C] shrink-0" />
                <span className="truncate">{loc.distanceFromOffice}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Local Office Contact Strip */}
        <div className="mt-10 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#00368C] shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Prefer an in-person meeting? Free client parking on site
              </h4>
              <p className="text-xs text-slate-600">
                Visit our office: 9 Blackmoorfoot Road, Crosland Moor, Huddersfield, HD4 5AQ. Or choose 100% paperless remote service.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#00368C] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
            >
              Book an Appointment
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
