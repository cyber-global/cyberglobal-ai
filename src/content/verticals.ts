// Industry-specific content variations for demos

export const verticals = {
  finance: {
    hero: {
      sub: "Deploy private AI for KYC automation, fraud detection, and regulatory compliance — without sending sensitive financial data to public models. SOC 2, PCI-DSS, and GDPR compliant.",
      stats: [
        { label: "Deployment models", value: "On‑prem • Private cloud • Air-gapped" },
        { label: "Financial use cases", value: "KYC • Fraud • AML compliance" },
        { label: "Security", value: "SOC 2 • PCI-DSS • Encryption" },
        { label: "Time to first value", value: "2–6 weeks pilots" }
      ]
    },
    businessImpact: {
      title: "Where AI creates value in Financial Services",
      sub: "From KYC document processing to fraud detection, discover how private AI accelerates compliance and reduces risk.",
      sections: [
        {
          h: "Why AI now for Finance",
          p: "Manual KYC reviews, legacy fraud systems, and evolving regulations slow operations. AI automates document verification, detects sophisticated fraud patterns, and maintains compliance — all while keeping data in your secure environment."
        },
        {
          h: "Outcomes to target",
          bullets: [
            "KYC processing time ↓ 60-80% with automated verification",
            "Fraud detection accuracy ↑ via ML pattern recognition",
            "Regulatory compliance by design: SOC 2, PCI-DSS, GLBA",
            "Audit‑ready trails with explainable AI decisions"
          ]
        },
        {
          h: "Financial AI maturity",
          p: "Start with KYC automation or fraud detection pilot, add risk scoring and monitoring, then scale across departments with shared compliance controls and encrypted data pipelines."
        },
        {
          h: "What good looks like",
          p: "A measured pilot processing 100-500 documents in 2-4 weeks, clear audit trails, dashboards for compliance teams, and regulatory approval documentation."
        }
      ]
    }
  },
  
  healthcare: {
    hero: {
      sub: "Deploy private AI for clinical documentation, medical records search, and HIPAA-compliant workflows — with PHI staying on your secure infrastructure. Built for healthcare compliance.",
      stats: [
        { label: "Deployment models", value: "On‑prem • Private cloud • HIPAA-ready" },
        { label: "Healthcare use cases", value: "EMR search • Clinical docs • Coding" },
        { label: "Security", value: "HIPAA • SOC 2 • BAA available" },
        { label: "Time to first value", value: "2–6 weeks pilots" }
      ]
    },
    businessImpact: {
      title: "Where AI creates value in Healthcare",
      sub: "From clinical documentation to medical records search, learn how private AI improves outcomes while maintaining HIPAA compliance.",
      sections: [
        {
          h: "Why AI now for Healthcare",
          p: "Manual documentation burden, scattered medical records, and strict privacy regulations slow care delivery. AI automates clinical notes, enables semantic search across EMRs, and assists coding — with zero PHI exposure to external models."
        },
        {
          h: "Outcomes to target",
          bullets: [
            "Clinical documentation time ↓ 40-60% with AI-assisted notes",
            "Medical records search ↑ accuracy with semantic retrieval",
            "HIPAA compliance by design: encryption, BAA, audit logs",
            "Coding accuracy ↑ with AI-suggested ICD-10/CPT codes"
          ]
        },
        {
          h: "Healthcare AI maturity",
          p: "Start with clinical documentation or EMR search pilot, add diagnostic support and coding assistance, then scale across departments with HIPAA-compliant infrastructure and role-based access."
        },
        {
          h: "What good looks like",
          p: "A measured pilot with 10-20 physicians in 3-6 weeks, BAA in place, PHI audit trails, and measurable time savings without compromising patient privacy."
        }
      ]
    }
  },
  
  manufacturing: {
    hero: {
      sub: "Deploy private AI for equipment manuals, maintenance procedures, and quality control — keeping proprietary manufacturing data on your infrastructure. ISO 27001 and industry 4.0 ready.",
      stats: [
        { label: "Deployment models", value: "On‑prem • Edge • Private cloud" },
        { label: "Manufacturing use cases", value: "Maintenance • QC • Documentation" },
        { label: "Security", value: "ISO 27001 • SOC 2 • IP protection" },
        { label: "Time to first value", value: "2–6 weeks pilots" }
      ]
    },
    businessImpact: {
      title: "Where AI creates value in Manufacturing",
      sub: "From equipment documentation to predictive maintenance, discover how private AI optimizes production without exposing trade secrets.",
      sections: [
        {
          h: "Why AI now for Manufacturing",
          p: "Complex equipment manuals, tribal knowledge loss, and unplanned downtime impact productivity. AI enables semantic search across technical docs, predicts maintenance needs, and automates quality inspections — with IP staying secure."
        },
        {
          h: "Outcomes to target",
          bullets: [
            "Maintenance resolution time ↓ 50-70% with instant manual lookup",
            "Unplanned downtime ↓ via predictive maintenance alerts",
            "Quality control consistency ↑ with automated visual inspection",
            "IP protection: zero proprietary data to external LLMs"
          ]
        },
        {
          h: "Manufacturing AI maturity",
          p: "Start with equipment manual search or predictive maintenance pilot, add quality control automation, then scale across plants with edge deployment and OT/IT integration."
        },
        {
          h: "What good looks like",
          p: "A focused pilot on 5-10 equipment types in 3-5 weeks, measurable MTTR reduction, integration with CMMS/ERP, and documented ROI for plant leadership."
        }
      ]
    }
  },
  
  public: {
    hero: {
      sub: "Deploy private AI for citizen services, document processing, and compliance workflows — with sensitive data staying in government-controlled infrastructure. FedRAMP and NIST compliant.",
      stats: [
        { label: "Deployment models", value: "On‑prem • Gov cloud • Air-gapped" },
        { label: "Public sector use cases", value: "Forms • Records • Compliance" },
        { label: "Security", value: "FedRAMP • NIST • Authority to Operate" },
        { label: "Time to first value", value: "3–8 weeks pilots" }
      ]
    },
    businessImpact: {
      title: "Where AI creates value in Public Sector",
      sub: "From citizen service automation to policy search, learn how private AI improves efficiency while meeting stringent government requirements.",
      sections: [
        {
          h: "Why AI now for Government",
          p: "Manual form processing, siloed agency knowledge, and strict data residency requirements slow service delivery. AI automates citizen requests, enables cross-agency search, and maintains compliance — with data sovereignty guaranteed."
        },
        {
          h: "Outcomes to target",
          bullets: [
            "Citizen request processing time ↓ 50-75% with automation",
            "Cross-agency knowledge search with access controls",
            "Compliance by design: FedRAMP, NIST 800-53, data residency",
            "Audit‑ready: full activity logs and explainable decisions"
          ]
        },
        {
          h: "Public sector AI maturity",
          p: "Start with form automation or document search pilot, add policy Q&A and compliance checks, then scale across agencies with federated deployment and strict access controls."
        },
        {
          h: "What good looks like",
          p: "A measured pilot processing 100-500 citizen requests in 4-8 weeks, Authority to Operate documentation, audit logs for oversight, and quantified efficiency gains for leadership."
        }
      ]
    }
  }
};

// Get vertical from query param or default
export function getVertical(searchParams: URLSearchParams | null): keyof typeof verticals | null {
  if (!searchParams) return null;
  
  const v = searchParams.get('v');
  if (v && v in verticals) {
    return v as keyof typeof verticals;
  }
  
  return null;
}

