import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectToT: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link to="/projects" className="inline-flex items-center text-[#008753] hover:underline mb-6 font-medium">
            <ArrowRight className="rotate-180 mr-2" size={16} />
            Back to All Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Training of Trainers (ToT)
          </h1>
          <div className="w-24 h-1 bg-[#008753] rounded-full mb-8"></div>
        </motion.div>

        <div className="space-y-16">
          {/* Training Overview Cards */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm text-[#008753]">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Venue</h3>
                <p className="text-gray-600 text-sm">Royal Tropicana Hotel, Zungeru Rd Kano, Kano State</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm text-[#008753]">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Date</h3>
                <p className="text-gray-600 text-sm">28th August – 1st Sept 2022</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm text-[#008753]">
                <Users size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Participants</h3>
                <p className="text-gray-600 text-sm">16 Expected / 16 Attended</p>
              </div>
            </div>
          </motion.section>

          {/* Preamble */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Preamble</h2>
            <div className="prose prose-lg text-gray-600 max-w-none text-justify space-y-4">
              <p>
                Leprosy continues to be a devastating disease if not detected and treated in time. Despite incredible development in medical care every year more than 200,000 people (including more than 20,000 children) are diagnosed with leprosy globally. Nigeria is among the 23 global priority countries that contribute &gt;97% of world leprosy burden. In 2018 more than 2095 new leprosy cases were reported including 6% children (indicating ongoing community transmission). In 2018, WHO endorsed the implementation of SDR-PEP as one of the strategies towards zero leprosy.
              </p>
              <p>
                The Ready4PEP Nigeria project is an initiative between the NLR international and LTR Nigeria. It is a multi-stakeholders project aim to implement active case finding, contact screening, administration of SDR-PEP and disability prevention in Nigeria. These strategies are in line with general objectives of the National TB and Leprosy Control Programme and WHO global leprosy strategy.
              </p>
              <p>
                The training of trainers is organized by LTR in collaboration with NLR, NTBLCP and ILEP partners. The main objective of the TOT is to train health care professional at the national level and provide them with necessary knowledge and skills needed to plan and effectively facilitate step down trainings on leprosy care including recent advances such as SDR-PEP and prevention of disability using self-care and combined self-care group.
              </p>
              <p>
                Sixteen (16) participants were invited from the National TB and leprosy training Centre Zaria, National TB and Leprosy Control Programme Abuja and Jigawa State TB Control Programme.
              </p>
            </div>
          </motion.section>

          {/* Objectives */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#008753]/5 p-8 rounded-2xl border border-[#008753]/10"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Training Objectives</h2>
            <p className="text-lg text-gray-800 font-medium mb-6">
              The main objective of the training is to introduce participants to the Ready4PEP project and provide them with knowledge and skills including facilitation skills that will enable them plan and effectively facilitate step down trainings for General Health Care Workers.
            </p>
            <h3 className="font-bold text-gray-900 mb-3">Specific Objectives:</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#008753] shrink-0 mt-1" size={20} />
                <span>To orient participants on the READYPEP Nigeria Project</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#008753] shrink-0 mt-1" size={20} />
                <span>To ensure that participants across all level are provided with necessary knowledge and skills needed to effectively and efficiently train others on leprosy care and prevention including SDR-PEP and Combined Self Care Group</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#008753] shrink-0 mt-1" size={20} />
                <span>To understand the Standard Operating Procedures guiding the implementation of the of the Ready4PEP</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#008753] shrink-0 mt-1" size={20} />
                <span>To ensure that all the grey areas on SDR-PEP and CSCG addressed before the end of the training.</span>
              </li>
            </ul>
          </motion.section>

          {/* Facilitators Table */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Facilitators & Support Staff</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="py-4 px-6 font-bold text-gray-900">Role</th>
                    <th className="py-4 px-6 font-bold text-gray-900">Name</th>
                    <th className="py-4 px-6 font-bold text-gray-900">Phone Number</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-gray-600 font-medium" rowSpan={3}>Facilitators</td>
                    <td className="py-4 px-6 text-gray-900">Dr. Tahir Dahiru</td>
                    <td className="py-4 px-6 text-gray-600">08037871294</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-gray-900">Dr. Suleiman Abdullahi</td>
                    <td className="py-4 px-6 text-gray-600">08068969321</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-gray-900">Mr. Jonathan Huji</td>
                    <td className="py-4 px-6 text-gray-600">08037051279</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="py-4 px-6 text-gray-600 font-medium">Support Staff</td>
                    <td className="py-4 px-6 text-gray-900">Mal. Ahmad Dahiru</td>
                    <td className="py-4 px-6 text-gray-600">08035760119</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Methodology & Materials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Methodology</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Lecture discussions</li>
                <li>• Power Point Presentation</li>
                <li>• Group exercise/Group work</li>
                <li>• Role play</li>
                <li>• Demonstration</li>
                <li>• Group presentations</li>
              </ul>
            </motion.section>
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Materials</h2>
              <ul className="space-y-2 text-gray-600">
                <li>1. Power Point Presentations</li>
                <li>2. Ready4PEP SOPs</li>
                <li>3. NTBLCP Leprosy Training Manual</li>
                <li>4. Short Videos</li>
                <li>5. Skin Diseases memory cards and flash cards</li>
                <li>6. SkinApp, Siilo and Ready4PEP electronic data collection form (ODK)</li>
              </ul>
            </motion.section>
          </div>

          {/* Training Activities/Sessions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Training Activities/Sessions</h2>
            <p className="text-gray-600 mb-4">
              Participants were introduced to Leprosy training Module, SDR-PEP and Ready4PEP Project SOPs under the following topics:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 mb-6">
              <li>• Suspecting Leprosy</li>
              <li>• Diagnosis of leprosy</li>
              <li>• Classification of leprosy</li>
              <li>• Administering leprosy treatment</li>
              <li>• Leprosy complication/reactions</li>
              <li>• Leprosy and Stigma</li>
              <li>• Contact Screening</li>
              <li>• Eligibility and recruitment in Ready4PEP</li>
              <li>• Screening for Skin Diseases</li>
              <li>• Screening for leprosy (Group presentations)</li>
              <li>• Administration of SDR-PEP</li>
              <li>• Facilitation skills</li>
            </ul>
            <p className="text-gray-600 text-justify">
              The training program was for a period of four days. The sessions were conducted using the experiential learning model with participants using their real experiences to guide the training process. A lot of emphasis was made on the importance of using participants’ experiences during training, principle of adult learning, facilitation skills, how to deal with difficult participants and effective ways of presentation. The participants were asked to practice teach back using the Leprosy training modules and the Ready4PEP SOPs. The groups were allocated a topics and were asked to prepare a lesson plan for presentation while other participants to evaluate the performance of their colleagues using a checklist that addresses effective facilitation and learning. Facilitators gave feedback especially on areas that needed improvement.
            </p>
          </motion.section>

          {/* Facilitators Recommendations */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#008753]/5 p-8 rounded-2xl border border-[#008753]/10"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Facilitators Recommendations</h2>
            <ul className="space-y-3 text-gray-600">
              {[
                "Ensure pre session meeting to allocate time, roles and topics",
                "Emphases on the use of lesson plan",
                "Make a checklist of what is needed for the session (organization)",
                "If handouts are available, go through it.",
                "Time keeping. Be there before the participants, follow ground rules and assign a time keeper",
                "Make use of parking lots/assignment",
                "Carry both facilitators and participants along",
                "Ensure you use your teaching aids",
                "Ensure you maintain a class discipline",
                "Ensure you manage difficult participants"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#008753] shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Summary of topics covered */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Summary of Topics Covered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Opening & Introduction</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Overview of SDR-PEP</li>
                  <li>• Introduction to Ready4PEP Nigeria project</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Eligibility & Recruitment</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Recruitment of index cases</li>
                  <li>• Contacts Screening</li>
                  <li>• Quiz and Role-play exercise</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Screening for Skin Diseases</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Skin diseases & Stigma</li>
                  <li>• Screening in the era of COVID-19</li>
                  <li>• Recognizing skin diseases (Games, SkinApp, Siilo)</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Screening for Leprosy</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Suspecting and Diagnosing leprosy</li>
                  <li>• Leprosy treatment & classification</li>
                  <li>• Leprosy and Stigma</li>
                  <li>• Complications/Reactions</li>
                  <li>• Combined Self-Care Group (SCG) & Self-care</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Administration of SDR-PEP</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• SDR-PEP administration</li>
                  <li>• Adverse event</li>
                  <li>• Medication safety</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Preparation for Training</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Common rituals in training</li>
                  <li>• How to prepare for training</li>
                  <li>• Planning for Facilitation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Curriculum/Lesson Plan</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Scope and lay out of a lesson Plan</li>
                  <li>• Effective facilitation & skills</li>
                  <li>• Facilitation Obstacle</li>
                  <li>• Teaching aids & Dealing with difficult Participants</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Recording and Reporting</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Introduction to Ready4PEP R&R tools</li>
                  <li>• Hands on practice on Ready4PEP e-forms (ODK forms)</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* What Next */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Next</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#008753] rounded-full shrink-0 mt-2.5"></div>
                <span>Formation Siilo Group for Ready4PEP</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#008753] rounded-full shrink-0 mt-2.5"></div>
                <span>Direct Technical Assistance to NTBL Training Centre Zaria</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#008753] rounded-full shrink-0 mt-2.5"></div>
                <span>Step down trainings for LGTBLS/MDT officer and CLW</span>
              </li>
            </ul>
          </motion.section>

          {/* Annexes */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Annexes</h2>
            
            {/* Annex 1 */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Annex 1: List of Participants</h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="py-3 px-4 font-bold text-gray-900">S/N</th>
                      <th className="py-3 px-4 font-bold text-gray-900">Name</th>
                      <th className="py-3 px-4 font-bold text-gray-900">Sex</th>
                      <th className="py-3 px-4 font-bold text-gray-900">Organization</th>
                      <th className="py-3 px-4 font-bold text-gray-900">Designation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { sn: 1, name: "Dr. Ibrahim Mukail", sex: "M", org: "SMOH", desig: "SPM TBLCP" },
                      { sn: 2, name: "Pharm, Mrs Nanna Kitchener", sex: "F", org: "NTBLCP/FCT", desig: "Community Pharmacist" },
                      { sn: 3, name: "Ayodele Oluwakemi", sex: "M", org: "NTBLCP/FCT", desig: "Senior Scientific Officer/NTBLCP" },
                      { sn: 4, name: "Odeleye Oyeyinka Seye", sex: "M", org: "NTBLCP/FCT", desig: "Advocacy Communication and Social Mobilisation Officer NTBLCP" },
                      { sn: 5, name: "Yahaya Bala", sex: "M", org: "NTBLTC Zaria", desig: "CHO" },
                      { sn: 6, name: "Balarabe Abubakar", sex: "M", org: "NTBLTC Zaria", desig: "Scientific officer" },
                      { sn: 7, name: "Bashir Lawal Shika", sex: "M", org: "NTBLTC Zaria", desig: "CHO" },
                      { sn: 8, name: "Obiyo Christian", sex: "M", org: "NTBLCP/FCT", desig: "Community Development Officer" },
                      { sn: 9, name: "Osi Christopher Anzaku", sex: "M", org: "NTBLTC Zaria", desig: "TBLS" },
                      { sn: 10, name: "Dr. Adamu Mohammed B.", sex: "M", org: "NTBLTC Zaria", desig: "Medical Officer" },
                      { sn: 11, name: "Amoabi Cocilia", sex: "F", org: "NTBLCP/FCT", desig: "Senior Lab Scientist" },
                      { sn: 12, name: "Chimaroke Obasi", sex: "F", org: "NTBLCP/FCT", desig: "M & E Officer" },
                      { sn: 13, name: "Dr. Ogbonna Ngozi", sex: "F", org: "NTBLTC Zaria", desig: "Medical Officer" },
                      { sn: 14, name: "Dr. Zakari Maryam S", sex: "F", org: "NTBLTC Zaria", desig: "Medical Officer" },
                      { sn: 15, name: "Kayode Oluwatobi Esther", sex: "F", org: "NTBLTC Zaria", desig: "Nurse" },
                      { sn: 16, name: "Igilima Vincent Eyembi", sex: "M", org: "NTBLTC Zaria", desig: "Nurse" },
                    ].map((row) => (
                      <tr key={row.sn} className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600">{row.sn}</td>
                        <td className="py-3 px-4 text-gray-900 font-medium">{row.name}</td>
                        <td className="py-3 px-4 text-gray-600">{row.sex}</td>
                        <td className="py-3 px-4 text-gray-600">{row.org}</td>
                        <td className="py-3 px-4 text-gray-600">{row.desig}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Annex 2 */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Annex 2: Participants score in training evaluation</h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-6">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="py-3 px-4 font-bold text-gray-900">S/no</th>
                      <th className="py-3 px-4 font-bold text-gray-900">Statement</th>
                      <th className="py-3 px-4 font-bold text-gray-900 text-center">Very Satisfied</th>
                      <th className="py-3 px-4 font-bold text-gray-900 text-center">Satisfied</th>
                      <th className="py-3 px-4 font-bold text-gray-900 text-center">Neutral</th>
                      <th className="py-3 px-4 font-bold text-gray-900 text-center">Unsatisfied</th>
                      <th className="py-3 px-4 font-bold text-gray-900 text-center">Strongly unsatisfied</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { sn: 1, text: "The topics were presented in a logical sequence in relation to the other", vs: 13, s: 3, n: "-", u: "-", su: "-" },
                      { sn: 2, text: "The sessions and the training overall lasted the right amount of time", vs: 11, s: 4, n: "1", u: "-", su: "-" },
                      { sn: 3, text: "The sessions were taught at an appropriate level", vs: 12, s: 4, n: "-", u: "-", su: "-" },
                      { sn: 4, text: "The content (topics) of the training was relevant to your local situation", vs: 13, s: 3, n: "-", u: "-", su: "-" },
                      { sn: 5, text: "The training methods were useful", vs: 13, s: 3, n: "-", u: "-", su: "-" },
                      { sn: 6, text: "The training sessions/topics extremely useful", vs: 10, s: 6, n: "-", u: "-", su: "-" },
                      { sn: 7, text: "The training materials used are very relevant", vs: 14, s: 2, n: "-", u: "-", su: "-" },
                      { sn: 8, text: "The training topic(s) are very relevant to the objectives of the training", vs: 15, s: 1, n: "-", u: "-", su: "-" },
                    ].map((row) => (
                      <tr key={row.sn} className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600">{row.sn}</td>
                        <td className="py-3 px-4 text-gray-900">{row.text}</td>
                        <td className="py-3 px-4 text-gray-600 text-center">{row.vs}</td>
                        <td className="py-3 px-4 text-gray-600 text-center">{row.s}</td>
                        <td className="py-3 px-4 text-gray-600 text-center">{row.n}</td>
                        <td className="py-3 px-4 text-gray-600 text-center">{row.u}</td>
                        <td className="py-3 px-4 text-gray-600 text-center">{row.su}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="py-3 px-4 font-bold text-gray-900">S/no</th>
                      <th className="py-3 px-4 font-bold text-gray-900">Statement</th>
                      <th className="py-3 px-4 font-bold text-gray-900 text-center">Competent</th>
                      <th className="py-3 px-4 font-bold text-gray-900 text-center">Knowledgeable</th>
                      <th className="py-3 px-4 font-bold text-gray-900 text-center">Neutral</th>
                      <th className="py-3 px-4 font-bold text-gray-900 text-center">Inexperience</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 text-gray-600">1</td>
                      <td className="py-3 px-4 text-gray-900">How would you rate the facilitator?</td>
                      <td className="py-3 px-4 text-gray-600 text-center">14</td>
                      <td className="py-3 px-4 text-gray-600 text-center">2</td>
                      <td className="py-3 px-4 text-gray-600 text-center">-</td>
                      <td className="py-3 px-4 text-gray-600 text-center">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Annex 3 */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Annex 3: Training program</h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="py-3 px-4 font-bold text-gray-900 whitespace-nowrap">Time</th>
                      <th className="py-3 px-4 font-bold text-gray-900">Day 1</th>
                      <th className="py-3 px-4 font-bold text-gray-900">Day 2</th>
                      <th className="py-3 px-4 font-bold text-gray-900">Day 3</th>
                      <th className="py-3 px-4 font-bold text-gray-900">Day 4</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      {
                        time: "08.30 – 09.00",
                        d1: "Registration",
                        d2: "Re Cap of the Day 1",
                        d3: "Re Cap of the day 2",
                        d4: "Re Cap of the day 3"
                      },
                      {
                        time: "09.00 – 09.30",
                        d1: "Opening Prayers\nSelf –Introduction\nOpening Remarks",
                        d2: "Leprosy Complication/Reaction",
                        d3: "Edibility and recruitment of index cases",
                        d4: "Presentation- Group A"
                      },
                      {
                        time: "09.30 – 10.30",
                        d1: "Objectives of the workshop\nEpidemiology",
                        d2: "Leprosy Complication/Reaction",
                        d3: "Contact tracing/Eligibility and recruitment of contacts",
                        d4: "Presentation- Group B"
                      },
                      {
                        time: "10.30 – 11.00",
                        d1: "Coffee/tea break",
                        d2: "Coffee/tea break",
                        d3: "Coffee/tea break",
                        d4: "Coffee/tea break"
                      },
                      {
                        time: "11.00 – 12.00",
                        d1: "Suspecting Leprosy",
                        d2: "Stigma and Leprosy\nAdministration of SDR-PEP",
                        d3: "Administration of SDR-PEP",
                        d4: "Presentation – Group C"
                      },
                      {
                        time: "12.00 – 1.30",
                        d1: "Suspecting Leprosy",
                        d2: "Self-Care/Combined Self Care Groups",
                        d3: "Screening for skin diseases\nRecognising skin diseases – skin signs & symptoms Memory Cards (Groups)",
                        d4: "Presentation –Group D"
                      },
                      {
                        time: "1.30 – 2.30",
                        d1: "Lunch",
                        d2: "Lunch",
                        d3: "Lunch",
                        d4: "Lunch"
                      },
                      {
                        time: "2.30 – 3.30",
                        d1: "Diagnosing Leprosy\nLeprosy Classification\nLeprosy Treatment",
                        d2: "Overview of SDR PEP.\nIntroduction to Ready4PEP Nigeria Project",
                        d3: "Recognizing Skin diseases – Skin App",
                        d4: "Presentation – Group E"
                      },
                      {
                        time: "3.30- 4.45",
                        d1: "Common ritual in training\nTraining preparation/Facilitation",
                        d2: "Introduction to curriculum and lesson plan.\nSpecial Topics in facilitation",
                        d3: "Preparation of micro-teaching\nFormation of pairs\nDividing topics for micro teaching\nIntroduction to class checklist\nIdentification of pairs for feedback",
                        d4: "Discussion"
                      },
                      {
                        time: "4:45- 5:00",
                        d1: "Summary of the day",
                        d2: "Summary of the day",
                        d3: "Summary of the day",
                        d4: "Closing of workshop"
                      }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-900 font-medium whitespace-nowrap">{row.time}</td>
                        <td className="py-3 px-4 text-gray-600 whitespace-pre-line">{row.d1}</td>
                        <td className="py-3 px-4 text-gray-600 whitespace-pre-line">{row.d2}</td>
                        <td className="py-3 px-4 text-gray-600 whitespace-pre-line">{row.d3}</td>
                        <td className="py-3 px-4 text-gray-600 whitespace-pre-line">{row.d4}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.section>

          {/* Gallery */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Picture Gallery</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src="https://www.ltrnigeria.org/images/r4p-project/tot/tot-group-pic.jpg" 
                alt="ToT Group Photograph" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default ProjectToT;
